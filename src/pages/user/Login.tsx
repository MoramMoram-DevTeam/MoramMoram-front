import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import star from "../../assets/images/star.svg"
import setAuthorizationToken from "./setAuthorizationToken";

const Login = () => {

  const [currentClick, setCurrentClick] = useState("user");
  const [prevClick, setPrevClick] = useState(null);

  const GetClick = (e:any) => {
    setCurrentClick(e.target.id);
    console.log(e.target.id);
  };

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  let navigate = useNavigate();

  const onEmailHandler = (event:any) => { // id 저장

    setEmail(event.currentTarget.value)
  }

  const onPwHandler = (event:any) => { // pw 저장
    setPw(event.currentTarget.value)
  }

  const login = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      const response = await axios.post('/app/auth/login', {
        email: email,
        pw: pw
      })        
          if(response.data.atk){
            console.log('response.data: ', response.data);            
            localStorage.setItem('rtk', response.data.rtk);
            localStorage.setItem('atk', response.data.atk);
            // setAtk(response.data.atk);
            setAuthorizationToken(response.data.atk);
            // const token = response.data.atk;
            // setTokenData(token);
            
            // alert(`로그인 성공: atk는 ${atk}`);
            console.log('일반회원!')
            window.location.replace('/');
            // navigate('/');
          }
          else {
            alert(response.data.status);
          }
          
    } catch (err) {
      console.log(err);
      

    }

  }

  const companyLogin = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      const response = await axios.post('/auth/company/login', {
        email: email,
        pw: pw
      })        
          if(response.data.atk){
            console.log('response.data: ', response.data);            
            localStorage.setItem('rtk', response.data.rtk);
            localStorage.setItem('atk', response.data.atk);
            setAuthorizationToken(response.data.atk);
            console.log('기업회원!');
            window.location.replace('/company');
          }
          else {
            alert(response.data.status);
            console.log('기업회원!');
            
          }
          
    } catch (err) {
      console.log(err);
      console.log('기업회원!');

    }

  }

  useEffect(() => {    
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        console.log(current);
        current.style.backgroundColor = "#FFCB1D";
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.backgroundColor = "#A7A7A7";
      }
      setPrevClick(currentClick);
   
  },[currentClick]);

  return (
    <div className={styles.login_wrap}>      
      <div className={styles.login_box}>

        <div className={styles.role_btn}>
        <button className={styles.user_btn} id="user" onClick={GetClick}>일반 회원</button>
          <button className={styles.company_btn} id="company" onClick={GetClick}>기업 회원</button>
        </div>
        
        <form onSubmit={ currentClick === "user" ? login : companyLogin} className={styles.login_inner_form} >
          <div className={styles.login_inner}>
            
            <div className={styles.login_form}>
              <div className={styles.form_title}>
                <img src={star} alt="*" />
                <div>아이디</div>
              </div>
              <input type="text" name="Id" value={email} onChange={onEmailHandler}/>
            </div>
            <div className={styles.login_form}>
            <div className={styles.form_title}>
                <img src={star} alt="*" />
                <div>비밀번호</div>
              </div>
              <input type="password" name="pw" value={pw}
              onChange={onPwHandler}/>
            </div>
          </div>
          <div>
            <button type="submit" className={styles.submit_btn}>로그인</button>
          </div>
        </form>


        {/* <div>
          <button>Google 로그인</button>
          <button>Kakao 로그인</button>
        </div> */}

        
          <Link to="/regist" className={styles.signup_btn}><div>회원가입</div></Link>
        

        
      </div>
    </div>
  )
}

export default Login;