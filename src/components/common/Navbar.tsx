import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/moramlogo.png";
import star from "../../assets/images/star.svg";
import search from "../../assets/images/search.png";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { NameState } from "recoil/NameState";
import axios from "axios";

const Navbar = () => {
  
  const MRName = useRecoilValue(NameState);
  const token = localStorage.getItem('atk');

  const logoutToken = async () => {
    await axios.patch('/app/auth/logout')
    .then((res) => {
      alert(res.data.statusMessage);

    })

    localStorage.removeItem('atk');
    localStorage.removeItem('rtk');
    // setToken('');
    window.location.replace(`/`);
  }

  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_top}>
        <Link to="/"><img src={logo} alt="logo" className={styles.logo}/></Link>
        <div className={styles.nav_searchbox}>
          <input type="text" placeholder="어떤 플리마켓을 찾고 계신가요?" className={styles.nav_textbox}  />
          <img src={search} alt="searchbutton" className={styles.nav_searchbtn} />
        </div>
        

        
      
        
          {token ?
            <div className={styles.logoutbox}>
          <span><Link to="/login">마이페이지</Link></span>  
          <span className={styles.line}></span>
          <span onClick={logoutToken}>로그아웃</span>      
        </div>
          :
        <div className={styles.loginbox}>
          <span><Link to="/regist">회원가입</Link></span>
          <span className={styles.line}></span>
          <span><Link to="/login">로그인</Link></span>       
        </div> 
        
      }

        

      </div>
      <div className={styles.nav_bottom}>
      {/* <span>{MRName}님</span> */}
        <ul>
          <li><Link to="/fleamarket">플리마켓</Link></li>
          <img src={star} className={styles.star} alt="."/>
          <li><Link to="/community/questions">커뮤니티</Link></li>
          <img src={star} className={styles.star} alt="."/>
          <li><Link to="/">플리마켓 대행</Link></li>
          <img src={star} className={styles.star} alt="."/>
          <li>공지사항</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar;