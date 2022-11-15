import React from "react";
import styles from "./Main.module.css";

import awning from "../assets/images/awning.svg";
import menubtn from "../assets/images/menubtn.svg";
import fire from "../assets/images/fire.svg";
import speaker from "../assets/images/speaker.svg";
import BannerCarousel from "components/common/Carousel/BannerCarousel";
import Slick from "components/common/Carousel/Slick";
import Item from "components/common/Carousel/Item";
import MainMenu from "components/common/MainMenu";

const Main = () => {
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
          <MainMenu />
          <MainMenu />
          <MainMenu />
          <MainMenu />
        </div>
      </div>

      <div className={styles.place_bar}>
        <img src={awning} alt="awning" className={styles.awning}/>
        <div className={styles.hotplace_bar}>
          <div>
            <span className={styles.title}>요즘 뜨는 HOT PLACE</span>
            <img src={fire} alt="fire" style={{verticalAlign: "sub"}}/>
          </div>
          <div>
            {/* 컴포넌트들 => 슬라이드 */}
            
          </div>
        </div>

        <div className={styles.review_bar}>
          <div style={{marginBottom: "30px"}}>
            <span className={styles.title}>생생한 후기가 도착했어요</span>
            <img src={speaker} alt="speaker"/>
          </div>
          <div style={{marginLeft: "10%"}}>
            <Item />
          </div>
          <div style={{marginLeft: "10%"}}>
            <Item />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main;