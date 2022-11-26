import React from "react";
import styles from "./Main.module.css";

import awning from "../assets/images/main/awning.svg";
import menubtn from "../assets/images/main/icons/menubtn.svg";
import fire from "../assets/images/main/icons/fire.svg";
import speaker from "../assets/images/main/icons/speaker.svg";


import hotp1 from "../assets/images/main/hotp1.svg";
import hotp2 from "../assets/images/main/hotp2.svg";

import BannerCarousel from "components/common/Carousel/BannerCarousel";

import Item from "components/common/Carousel/Item";
import MainMenu from "components/common/MainMenu";

import calendaricon from "../assets/images/main/mainmenu/calendaricon.svg";
import promotionicon from "../assets/images/main/mainmenu/promotionicon.svg";
import applyicon from "../assets/images/main/mainmenu/applyicon.svg";
import mapicon from "../assets/images/main/mainmenu/mapicon.svg";

const Main = () => {

  const menu = [{
    title: "플리마켓 일정 확인",
    image: calendaricon,
    url: "/fleamarket/calendar"
  },
  {
    title: "프로모션 / 모집",
    image: promotionicon,
    url: "/promotion"
  },
  {
    title: "플리마켓 추천",
    image: mapicon,
    url: "/fleamarket/recommend"
  },
  {
    title: "신청서 작성",
    image: applyicon,
    url: "/fleamarket/apply/1"
  },

]

  return (
    <div className={styles.main_wrap}>
      {/* 배너 */}
      <BannerCarousel />

      <div className={styles.notice_bar}>
        <span className={styles.notice}>[공지사항]</span>
        <span>'초보 플리마켓 셀러들을 위한 아이템 정보' ZOOM 온라인 설명회 안내</span>
        <span style={{color: "#676767", marginLeft: "200px"}}>2022.11.15</span>
      </div>


      <div className={styles.main_menu_bar}>
        <div>
          <span className={styles.title}>
            주요 메뉴 바로가기</span>
          <img src={menubtn} alt="btn"/>
        </div>
        
        <div className={styles.menu_box}>
          {menu.map((item, idx) => (<MainMenu title={item.title} image={item.image} url={item.url} key={idx}/>))}

        </div>
      </div>

      <div className={styles.place_bar}>
        <img src={awning} alt="awning" className={styles.awning}/>
        <div className={styles.hotplace_bar}>
          <div>
            <span className={styles.title}>요즘 뜨는 HOT PLACE</span>
            <img src={fire} alt="fire" style={{verticalAlign: "sub"}}/>
          </div>
          <div className={styles.hotp_pic}>
            {/* 컴포넌트들 => 슬라이드 */}
           <img src={hotp1} alt="hotp1" className={styles.hotp}/>
           <img src={hotp2} alt="hotp2"/>
            
            
          </div>
        </div>

        <div className={styles.review_bar}>
          <div style={{marginBottom: "30px"}}>
            <span className={styles.title}>생생한 후기가 도착했어요</span>
            <img src={speaker} alt="speaker"/>
          </div>
          <div style={{marginLeft: "10%"}}>
            <Item title="셀러 후기"/>
          </div>
          <div style={{marginLeft: "10%"}}>
            <Item title="주최 후기" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main;