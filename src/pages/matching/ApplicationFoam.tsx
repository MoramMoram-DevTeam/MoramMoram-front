import React from "react";
import effect from "../../assets/images/effect.svg";
import applyicon from "../../assets/images/applyicon.svg";
import styles from "./ApplicationFoam.module.css";

interface AppFoam {
    image?: string,
    title: string
}

const appArray:AppFoam[] = [{image: applyicon, title: "신청서 작성 바로가기"},
{image: applyicon, title: "신청 결과 바로가기"}]

const ApplicationFoam = () => {
  return (
    
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청서 작성 및 결과<img src={effect} alt="*" /></div>
{/* map으로 바꾸기 */}
      <div className={styles.app_btn_wrap}>
        {(appArray as Array<AppFoam>).map((item) => 
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

export default ApplicationFoam;