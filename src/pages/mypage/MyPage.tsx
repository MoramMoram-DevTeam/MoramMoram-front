import React from "react";
import styles from "./MyPage.module.css";

import star from "../../assets/images/star.svg";
import effect from "../../assets/images/effect.svg";

const MyPage = () => {
  return (
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>마이페이지<img src={effect} alt="*" /></div>

      <div className={styles.flex_wrap}>
        <div className={styles.my_menu}>
          <ul>
            <li><img src={star} alt="*" />회원 정보 관리</li>
            <li>회원 정보 수정</li>
            <li>기본 신청서 관리</li>
            <li>플리마켓 신청 현황</li>
          </ul>
          <div className={styles.line}></div>
          <ul>
            <li><img src={star} alt="*" />팔로워 관리</li>
            <li>팔로우/팔로잉 확인</li>
            <li>찜 관리</li>
            <li>팔로워 전체 알림</li>
          </ul>
          <div className={styles.line}></div>
          <ul>
            <li><img src={star} alt="*" />커뮤니티 관리</li>
            <li>커뮤니티 글 댓글 작성</li>
          </ul>
          <div className={styles.line}></div>
          <ul>
            <li><img src={star} alt="*" />계정 관리</li>
            <li>고객 센터</li>
            <li>회원 탈퇴</li>
          </ul>
        </div>
        <div className={styles.my_info}>
         
            <ul>
              <li><img src={star} alt="*" />고객정보</li>

            </ul>
            <ul>
              <li><img src={star} alt="*" />플리마켓 정보</li>

            </ul>
            <ul>
              <li><img src={star} alt="*" />사업자 등록증 관리</li>

            </ul>

            <ul>
              <li><img src={star} alt="*" />플리마켓 지원 현황</li>

            </ul>
          </div>
          </div>

      </div>
      )
}

      export default MyPage;