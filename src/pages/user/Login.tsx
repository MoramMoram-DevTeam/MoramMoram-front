import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useSetRecoilState, useRecoilValue} from "recoil";
import { atkState } from "recoil/atkState";
import setAuthorizationToken from "./setAuthorizationToken";

const Login = () => {

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const setAtk = useSetRecoilState(atkState);
  const atk = useRecoilValue(atkState);
  let navigate = useNavigate();

  const onEmailHandler = (event:any) => { // id 저장
    console.log(event.currentTarget.value)
    setEmail(event.currentTarget.value)
  }

  const onPwHandler = (event:any) => { // pw 저장
    console.log(event.currentTarget.value)
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
            setAuthorizationToken(response.data.atk);
            localStorage.setItem('rtk', response.data.rtk);
            setAtk(response.data.atk);
            // const token = response.data.atk;
            // setTokenData(token);
            
            alert(`로그인 성공: atk는 ${atk}`);
            navigate('/');
          }
          else {
            alert(response.data.status);
          }
          
    } catch (err) {
      // alert(err.response.statusMessage);

    }

  }

  return (
    <div>
      <div>로그인</div>
      
      <div>

        <div>
          <button>개인회원</button>
          <button>기업회원</button>
        </div>
        <form onSubmit={login}>
          <div>
            <input type="text" name="Id" placeholder="아이디" value={email}
              onChange={onEmailHandler}/>
            <input type="password" name="pw" placeholder="비밀번호" value={pw}
              onChange={onPwHandler}/>
          </div>
          <div>
            <button type="submit">로그인</button>
            <div>
              <span>아이디/비밀번호 찾기</span>
            </div>
          </div>
        </form>

        <div>
          <button>Google 계정 로그인</button>
          <button>kakao 계정 로그인</button>
        </div>

        <div>
          <span>모람모람이 처음이신가요?</span>
          <span>회원가입</span>
        </div>

        
      </div>
    </div>
  )
}

export default Login;