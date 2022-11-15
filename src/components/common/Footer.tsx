import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/moramlogo.png";
import youtube from "../../assets/images/footer/youtube.svg";
import linkedin from "../../assets/images/footer/in.svg";
import fb from "../../assets/images/footer/fb.svg";
import news from "../../assets/images/footer/news.svg";
import naver from "../../assets/images/footer/naver.svg";

const Footer = () => {
  return (
    <div className={styles.footer_wrap}>
      <div className={styles.center_wrap}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.rights}>COPYRIGHT© MORAMMORAM. All Rights Reserved.</div>
        <div className={styles.icon}>
          <img src={fb} alt="fb" />
          <img src={youtube} alt="yt" />
          <img src={news} alt="news" />
          <img src={naver} alt="nv" />
          <img src={linkedin} alt="in" />
        </div>
      </div>
    </div>
  )
}

export default Footer;