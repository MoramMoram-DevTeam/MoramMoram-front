import React from "react";
import { Link } from "react-router-dom";
import styles from "./RegistForm.module.css";
import effect from "../../../assets/images/effect.svg"

const RegistForm = () => {
  return (
    <div className={styles.wrap}>

      <div className={styles.title}>모람모람 가입을 환영합니다<img src={effect} alt="*" /></div>

      <div className={styles.btn_wrap}>
        
          <Link to="/signup/user">
            <div className={styles.btn}>
              <div>
                <div className={styles.btn_title}>개인회원가입</div>
                <div className={styles.direct_btn}></div>
              </div>
            </div>
          </Link>
        

        
        <Link to="/signup/user-c">
          <div className={styles.btn}>
            <div>
              <div className={styles.btn_title}>기업회원가입</div>
              <div className={styles.direct_btn}></div>
            </div>
          </div>   
        </Link>
        
      </div>

    </div>
  )
}

export default RegistForm;