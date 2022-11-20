import axios from "axios";
import Common from "components/community/Common";
import React, {useState} from "react";
import styles from "./Signup.module.css";

const MRUserSignup = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwordMsg, setPasswordMsg] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [pnum, setPnum] = useState<string>("");
  const [cnum, setCnum] = useState<string>("");

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

  const onCnumHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnum(event.currentTarget.value)
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
     const response = await axios.post('/app/sign-up', {
        email: email,
        name: name,
        pw: password,
        pnum: pnum,
        uimg: "",
        maketing: false
      })
        if(response.data.atk) {
           alert('회원가입이 완료되었습니다.');
        }
        else
          alert('회원가입에 실패하였습니다.');          
      
    } catch (err) {
      console.log("Join Error >>", err);
    }
  };

  return (
    <Common title="개인회원가입">
      
      <form onSubmit={handleSubmit}>
            <div className={styles.box}>
              <div className={styles.title}>이름</div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className={styles.input_join}/>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>이메일</div>
              <div className={styles.email}>
              <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className={styles.input_join}/>
              
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>비밀번호</div>
              <input name="password" type="password" placeholder="영문, 숫자, 특수문자를 조합한 6자리 이상" value={password} onChange={onPasswordHandler} className={styles.input_join}/>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>비밀번호 확인</div>
              <input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className={styles.input_join}/>
            </div>
            <div className={styles.box}>
              <div className={styles.title}>휴대폰 번호</div>
              <input name="pnum" type="text" placeholder="-을 포함하여 입력해주세요." value={pnum} onChange={onPnumHandler}className={styles.input_join} />
            </div>
            <div className={styles.box}>
              <div className={styles.title}>프로필 사진</div>
              <input name="profile" type="file" />
            </div>
            <div className={styles.box}>
              <div className={styles.title}>사업자 등록번호 (선택)</div>
              <input name="pnum" type="text" placeholder="-을 포함하여 입력해주세요." value={cnum} onChange={onCnumHandler}className={styles.input_join} />
            </div>
            <div><label><input type="checkbox" name="xxx" value="personal" />{'['}필수{']'} 모람모람 이용 약관 및 개인정보 수집에 동의합니다.</label></div>
            <div><label><input type="checkbox" name="xxx" value="marketing" />{'['}선택{']'} 서비스와 관련된 광고와 마케팅 메세지를 받겠습니다.</label></div>
            <div className={styles.box}>
              <button type="submit" className={styles.submitbtn}>가입하기</button>
            </div>
        </form>
    </Common>
  )
}

export default MRUserSignup;