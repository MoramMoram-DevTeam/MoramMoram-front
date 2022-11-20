import React from "react";
import effect from "../../assets/images/effect.svg";
import applyicon from "../../assets/images/applyicon.svg";
import styles from "./ApplicationForm.module.css";

interface AppForm {
    image?: string,
    title: string
}

const appArray:AppForm[] = [{image: applyicon, title: "신청서 작성 바로가기"},
{image: applyicon, title: "신청 결과 바로가기"}]

const ApplicationForm = () => {
  return (
    
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청서 작성 및 결과<img src={effect} alt="*" /></div>

      <div className={styles.app_btn_wrap}>
        {(appArray as Array<AppForm>).map((item) => 
          <div className={styles.app_btn}>
              <img src={item.image} alt="icon"/>
              <div>
                <div className={styles.app_btn_title}>{item.title}</div>
                <div className={styles.direct_btn}></div>
            </div>
            
        </div>
        )}
       
      </div>

    </div>
  )

}

export default ApplicationForm;