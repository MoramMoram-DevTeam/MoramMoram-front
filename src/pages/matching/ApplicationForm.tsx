import React from "react";
import effect from "../../assets/images/effect.svg";
import applyicon from "../../assets/images/main/mainmenu/applyicon.svg";
import styles from "./ApplicationForm.module.css";
import ReactGA from "react-ga";
import { useNavigate } from "react-router-dom";

interface AppForm {
    id: number,
    image?: string,
    title: string
}

const appArray:AppForm[] = [{id: 1, image: applyicon, title: "신청서 작성 바로가기"},
{id: 2, image: applyicon, title: "신청 결과 바로가기"}]

const ApplicationForm = () => {

  const navigate = useNavigate();

  return (
    
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청서 작성 및 결과<img src={effect} alt="*" /></div>

      <div className={styles.app_btn_wrap}>
        {(appArray as Array<AppForm>).map((item) => 
          <div className={styles.app_btn} onClick= {() => {
            navigate('/fleamarket/recommend');
          }} key={item.id}>
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