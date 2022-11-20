import axios from "axios";
import setAuthorizationToken from "pages/user/setAuthorizationToken";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
   const originalConfig = error.config;
   if(error.response){
    if (error.response.status === 401) {

    const refreshToken = localStorage.getItem("rtk");

        // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
        // 토큰 갱신 서버통신
        const res = await axios.get('/app', {
          headers: {
            'REFRESH_TOKEN': refreshToken
          },
          
        });

        const token = res.data.atk;
        console.log('new token:',token);
        
        localStorage.setItem('atk', token);
        setAuthorizationToken(token);
        error.config.headers.Authorization = `Bearer ${token}`;
        
        return axios(originalConfig);
      }
    }
    
    return Promise.reject(error);
    }
);