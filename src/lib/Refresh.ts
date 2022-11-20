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
      
      // if (!isTokenRefreshing) {
      //   // isTokenRefreshing이 false인 경우에만 token refresh 요청
      //   isTokenRefreshing = true;
    const refreshToken = localStorage.getItem("rtk");

        // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
        // 토큰 갱신 서버통신
        const res = await axios.get('/app', {
          headers: {
            'REFRESH_TOKEN': refreshToken
          },
          withCredentials: true
        });

        const token = res.data.atk;
        console.log('new token:',token);
        
        // const [accessToken, setAccessToken] = useRecoilState(AtkState);
        // setAccessToken(token);
        // isTokenRefreshing = false;
        localStorage.setItem('atk', token);
        setAuthorizationToken(token);
        error.config.headers.Authorization = `Bearer ${token}`;
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // onTokenRefreshed(token);
        console.log('여기까진 되나?');
        return axios(originalConfig);
      }
    }
    
    return Promise.reject(error);
    }
);