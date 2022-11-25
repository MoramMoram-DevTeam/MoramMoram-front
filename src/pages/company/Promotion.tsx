import React from "react";
import styles from "../Main.module.css";

import awning from "../../assets/images/main/awning.svg";
import menubtn from "../../assets/images/main/icons/menubtn.svg";
import fire from "../../assets/images/main/icons/fire.svg";
import speaker from "../../assets/images/main/icons/speaker.svg";


import hotp1 from "../../assets/images/main/hotp1.svg";
import hotp2 from "../../assets/images/main/hotp2.svg";

import Item from "components/common/Carousel/Item";
import MainMenu from "components/common/MainMenu";

import calendaricon from "../../assets/images/main/mainmenu/calendaricon.svg";
import promotionicon from "../../assets/images/main/mainmenu/promotionicon.svg";
import applyicon from "../../assets/images/main/mainmenu/applyicon.svg";
import mapicon from "../../assets/images/main/mainmenu/mapicon.svg";


import promotionbanner from "../../assets/images/promotionbanner.svg";

const Promotion = () => {

  const menu = [{
    title: "플리마켓 일정 확인",
    image: calendaricon
  },
  {
    title: "프로모션 / 모집",
    image: promotionicon
  },
  {
    title: "플리마켓 추천",
    image: mapicon
  },
  {
    title: "신청서 작성",
    image: applyicon
  },

]

  return (
    <div className={styles.main_wrap}>

      <img src={promotionbanner} alt="promotion" style={{width: "100%", cursor: "pointer"}} />

      <div className={styles.place_bar}>
        <img src={awning} alt="awning" className={styles.awning}/>
        <div className={styles.hotplace_bar}>
          <div>
            <span className={styles.title}>프로모션 & 주최 대행 포트폴리오</span>
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
            <span className={styles.title}>프로모션 & 주최 대행 후기</span>
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

export default Promotion;