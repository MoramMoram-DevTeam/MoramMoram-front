import React from "react";
import effect from "../../assets/images/effect.svg";
import styles from "./AppFormWrite4.module.css";
import star from "../../assets/images/star.svg";
import prevbtn from "../../assets/images/form/prevbtn.svg";
import submitbtn from "../../assets/images/form/submitbtn.svg";

import { useNavigate } from "react-router-dom";

const AppFormWrite4 = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청서 작성<img src={effect} alt="*" /></div>
      
      <div className={styles.app_box} >
        <div className={styles.app_subtitle}>신청 완료!</div>
        

      </div>
      <div className={styles.under_box}>
        <div className={styles.prev_btn}><img src={prevbtn} alt="prev" onClick={() => {
         navigate('/fleamarket/apply/2');        
        }} />
        <div className={styles.submit_btn}><img src={submitbtn} alt="subbtn" onClick={() => {
         navigate('/fleamarket/apply/2');        
        }} />
      </div>
        
      </div>
      </div>
    </div>
  )
}

export default AppFormWrite4;