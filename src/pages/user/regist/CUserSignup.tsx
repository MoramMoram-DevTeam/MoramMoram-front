import axios from "axios";
import Common from "components/community/Common";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import setAuthorizationToken from "../setAuthorizationToken";
import styles from "./Signup.module.css";

const CUserSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwordMsg, setPasswordMsg] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [pnum, setPnum] = useState<string>("");
  const [cnum, setCnum] = useState<string>("");
  const [cname, setCname] = useState<string>("");

  const onNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }
  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.currentTarget.value);
      if(password === confirmPassword) {setPasswordMsg('비밀번호가 일치합니다.');}
  }

  const onPnumHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPnum(event.currentTarget.value)
  }

  const onCnameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCname(event.currentTarget.value)
  }

  const onCnumHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnum(event.currentTarget.value)
  }

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
     const response = await axios.post('/company-user/sign-up', {
      email: email,
      name: name,
      pw: password,
      pnum: pnum,
      market_add: cnum,
      office_add: cname,
      uimg: "",
      marketing: false
     })
        if(response.data.atk) {
           alert('회원가입이 완료되었습니다.');
           localStorage.setItem('rtk', response.data.rtk);
            localStorage.setItem('atk', response.data.atk);
            setAuthorizationToken(response.data.atk);
            window.location.replace('/');
        }
        else{
          alert(`회원가입 실패: ${response.data.statusMessage}`);
        }
      
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Common title="기업회원가입">
      <div className={styles.inner}>
      <form onSubmit={handleSubmit}>
            <div className={styles.box}>
              <h3>이름</h3><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className={styles.input_join}/>
            </div>
            <div className={styles.box}>
              <h3>이메일</h3>
              <div className={styles.email}>
              <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className={styles.input_join}/>
              
              </div>
            </div>
            <div className={styles.box}>
              <h3>비밀번호</h3>
              <input name="password" type="password" placeholder="영문, 숫자, 특수문자를 조합한 6자리 이상" value={password} onChange={onPasswordHandler} className={styles.input_join}/>
            </div>
            <div className={styles.box}>
              <h3>비밀번호 확인</h3>
              <input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className={styles.input_join}/>
            </div>
            <span>{passwordMsg}</span>
            <div className={styles.box}>
              <h3>휴대폰 번호</h3>
              <input name="pnum" type="text" placeholder="-을 포함하여 입력해주세요." value={pnum} onChange={onPnumHandler}className={styles.input_join} />
            </div>
            <div className={styles.box}>
              <h3>프로필 사진</h3>
              <input name="profile" type="file" />
            </div>
            {/* <div className={styles.box}>
              <h3>사업자명</h3>
              <input name="cname" type="text" value={cname} onChange={onCnameHandler}className={styles.input_join} />
            </div> */}
            <div className={styles.box}>
              <h3>사업자명</h3>
              <input name="cname" type="text" placeholder="-을 포함하여 입력해주세요." value={cname} onChange={onCnameHandler}className={styles.input_join} />
            </div>
            <div className={styles.box}>
              <h3>사업자 등록번호</h3>
              <input name="hostCnum" type="text" value={cnum} onChange={onCnumHandler} className={styles.input_join} />
            </div>
            <div className={styles.box}>
              <div><label><input type="checkbox" name="xxx" value="personal" />{'['}필수{']'} 모람모람 이용 약관 및 개인정보 수집에 동의합니다.</label></div>
              <div><label><input type="checkbox" name="xxx" value="marketing" />{'['}선택{']'} 서비스와 관련된 광고와 마케팅 메세지를 받겠습니다.</label></div>
            </div>
            <div className={styles.box}>
              <button type="submit" className={styles.submitbtn}>가입하기</button>
            </div>
        </form></div>
        </Common>
   
  )
}

export default CUserSignup;