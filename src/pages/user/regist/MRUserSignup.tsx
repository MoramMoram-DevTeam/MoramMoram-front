import axios from "axios";
import React, {useState} from "react";
import styles from "./Signup.module.css";

const MRUserSignup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pnum, setPnum] = useState("");

  const onNameHandler = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setName(event.currentTarget.value)
  }
  const onEmailHandler = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
      setConfirmPassword(event.currentTarget.value)
  }
  const onPnumHandler = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setPnum(event.currentTarget.value)
  }

  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
     axios.post('/app/sign-up', {
        email: email,
        name: name,
        pw: password,
        pnum: pnum,
        uimg: "",
        maketing: false
      }).then(function (response) {
        if(response.data.atk) {
           alert('회원가입이 완료되었습니다.');
        }
        else
          alert('회원가입에 실패하였습니다.');          
      });
      
    } catch (err) {
      console.log("Join Error >>", err);
    }
  };


  return (
    <div>
      <div>개인회원가입</div>
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
            <div className={styles.box}>
              <h3>휴대폰 번호</h3>
              <input name="pnum" type="text" placeholder="-을 포함하여 입력해주세요." value={pnum} onChange={onPnumHandler}className={styles.input_join} />
            </div>
            <div className={styles.box}>
              <h3>프로필 사진</h3>
              <input name="profile" type="file" />
            </div>
            <div className={styles.box}>
              <div>마케팅 수신 동의</div>
            </div>
            <div className={styles.box}>
              <button type="submit" className={styles.submitbtn}>가입하기</button>
            </div>
        </form>
    </div>
  )
}

export default MRUserSignup;