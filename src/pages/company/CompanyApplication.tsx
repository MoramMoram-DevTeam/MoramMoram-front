import React from "react";
import styles from "../../components/matching/AppFormWrite1.module.css";
import effect from "../../assets/images/effect.svg";
import capture from "../../assets/images/cap2.PNG";

const CompanyApplication = () => {
  return (
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청내역 확인<img src={effect} alt="*" /></div>
      <div className={styles.app_box}>
        <img  src={capture} style={{width: "936px", marginTop: "100px"}}/>
      </div>
    </div>
  )
}

export default CompanyApplication;