import React from "react";
import styles from "./MainMenu.module.css";

interface MenuInfo {
  title: string;
  image: string;
}

const MainMenu = ({title, image}:MenuInfo) => {
  return (
    <div className={styles.app_btn}>
      <div>
        <img src={image} alt="logo" />
        <div className={styles.fl_title}>
          {title}
        </div> 
        <div className={styles.direct_btn}></div>
      </div>           
    </div>
  )

}

export default MainMenu;