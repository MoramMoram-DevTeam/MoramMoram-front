import React from "react";
import styles from "../../components/matching/AppFormWrite1.module.css";
import effect from "../../assets/images/effect.svg";

const CompanyApplication = () => {
  return (
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청내역 확인<img src={effect} alt="*" /></div>
      <div className={styles.app_box}>
      </div>
    </div>
  )
}

export default CompanyApplication;