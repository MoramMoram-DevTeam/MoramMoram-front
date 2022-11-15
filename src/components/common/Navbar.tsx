import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/moramlogo.png";
import star from "../../assets/images/star.svg";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_top}>
        <Link to="/"><img src={logo} alt="logo" className={styles.logo}/></Link>
        <div className={styles.nav_searchbox}>
          <input type="text" placeholder="어떤 플리마켓을 찾고 계신가요?" className={styles.nav_textbox}  />
          <img src={search} alt="searchbutton" className={styles.nav_searchbtn} />
        </div>
        <div className={styles.loginbox}>
          <span>회원가입</span>
          <span className={styles.line}></span>
          <span>로그인</span>
        </div>
      </div>
      <div className={styles.nav_bottom}>
        <ul>
          <li><Link to="/app">플리마켓</Link></li>
          <img src={star} className={styles.star} alt="."/>
          <li><Link to="/community-write">커뮤니티</Link></li>
          <img src={star} className={styles.star} alt="."/>
          <li>플리마켓 대행</li>
          <img src={star} className={styles.star} alt="."/>
          <li>공지사항</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar;