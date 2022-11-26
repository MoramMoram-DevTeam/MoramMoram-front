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
          <span><Link to="/mypage">마이페이지</Link></span>  
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
          <li className={styles.nav_bottom1}>
            <Link to="/fleamarket" >플리마켓</Link>
            <div className={styles.nav_dropdown}>
              <ul  className={styles.hidden_dropdown}></ul>
              <ul className={styles.nav_dropdown1}>
                  <li><Link to="/fleamarket/calendar">일정확인</Link></li>
                  <li><Link to="/fleamarket/recommend">플리마켓 추천</Link></li>
                  <li><Link to="/app">신청서 작성 및 확인</Link></li>
              </ul>
              <ul className={styles.nav_dropdown2}>
                  <li><Link to="/community/tips">정보게시판</Link></li>
                  <li><Link to="/community/questions">질문게시판</Link></li>
              </ul>
              <ul className={styles.nav_dropdown3}>
                  <li><Link to="/">집기대여</Link></li>
                  <li><Link to="/promotion">프로모션/주최 대행</Link></li>
              </ul>
              <ul></ul>
             
            </div>  
          </li>
          <img src={star} className={styles.star} alt="."/>
          <li className={styles.nav_bottom2}>
            <Link to="/community/questions">커뮤니티</Link>
           
          </li >
          <img src={star} className={styles.star} alt="."/>
          <li className={styles.nav_bottom3}><Link to="/community/tips">플리마켓 대행</Link></li>
      
          <img src={star} className={styles.star} alt="."/>
          {/* <li>공지사항</li> */}
          <li>
            <Link to="/">공지사항</Link>
            
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar;