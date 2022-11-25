import React, {useEffect, useRef} from "react";
import effect from "../../assets/images/effect.svg";

import cap3 from "../../assets/images/cap3.PNG";
import styles from "./AppFormWrite4.module.css";
import star from "../../assets/images/star.svg";
import prevbtn from "../../assets/images/form/prevbtn.svg";
import submitbtn from "../../assets/images/form/submitbtn.svg";

import { useNavigate } from "react-router-dom";

const AppFormWrite4 = () => {

  const navigate = useNavigate();
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    detailRef.current?.scrollIntoView();
   
}, []);

  return (
    <div className={styles.app_wrap} ref={detailRef}>
      <div className={styles.app_title}>신청서 작성<img src={effect} alt="*" /></div>
      
      <div className={styles.app_box} >
        <div className={styles.app_subtitle}>신청 완료!</div>
        
        <img src={cap3} style={{width: "936px", marginTop: "100px"}} />
      </div>
      <div className={styles.under_box}>
        <div className={styles.submit_btn}><img src={submitbtn} alt="subbtn" onClick={() => {
         navigate('/company/application');        
        }} />
      </div>
        
      </div>
    </div>
  )
}

export default AppFormWrite4;