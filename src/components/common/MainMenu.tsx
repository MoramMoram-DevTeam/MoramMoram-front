import React from "react";
import calendaricon from "../../assets/images/calendaricon.svg";
import styles from "./MainMenu.module.css";

const MainMenu = () => {
  return (
    <div className={styles.app_btn}>
      <div>
        <img src={calendaricon} alt="logo" />
        <div className={styles.fl_title}>
          플리마켓 일정 캘린더 바로가기
        </div> 
        <div className={styles.direct_btn}></div>
      </div>           
    </div>
  )

}

export default MainMenu;