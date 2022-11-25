import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainMenu.module.css";

interface MenuInfo {
  title: string;
  image: string;
  url: string;
}

const MainMenu = ({title, image, url}:MenuInfo) => {
  const navigate = useNavigate();

  return (
    <div className={styles.app_btn} onClick={() => {
      navigate(`${url}`);
    window.scrollTo(0,0);
    //alert('z');
    }}>
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