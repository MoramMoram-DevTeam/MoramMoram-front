import React, { useEffect, useRef, useState } from "react";
import styles from "./MyPage.module.css";

import star from "../../assets/images/star.svg";
import effect from "../../assets/images/effect.svg";
import axios from "axios";

const MyPage = () => {
  const detailRef = useRef<HTMLDivElement>(null);
  const [lists, setLists] = useState([
    {
      "applicationId": 1,
      "marketId": 1,
      "userId": 2,
      "storeName": "자양사랑 플리마켓",
      "onlineChannel": null,
      "returnAddress": null,
      "categoryId": 1,
      "category1": true,
      "category2": false,
      "category3": false,
      "category4": false,
      "subCategoryId": 1,
      "subCategory1": "가죽지갑",
      "subCategory2": "가죽공예",
      "subCategory3": null,
      "subCategory4": null,
      "subCategory5": null,
      "marketExp": true,
      "onlineExp": true,
      "utensil": null,
      "certificateImg": null,
      "priceAvg": "1만원~2만원",
      "itemImg": null,
      "request": null,
      "createdAt": "2022-11-23T05:13:56",
      "updatedAt": "2022-11-23T05:13:56",
      "status": true,
      "userName": "user"
    }
  ]);

  useEffect(() => {
    detailRef.current?.scrollIntoView();
    axios.get('/applications')
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  return (
    <div className={styles.app_wrap} ref={detailRef}>
      <div className={styles.app_title}>마이페이지<img src={effect} alt="*" /></div>

      <div className={styles.flex_wrap}>
        <div className={styles.my_menu}>
          <ul>
            <li><img src={star} alt="*" />회원 정보 관리</li>
            <li>회원 정보 수정</li>
            <li>기본 신청서 관리</li>
            <li style={{color: "#FFB600"}}>플리마켓 신청 현황</li>
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

          <div className={styles.my_info_title}>
            <img src={star} alt="*" />고객정보
          </div>
          <div className={styles.user_info}>
            <table>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>육캔두잇</td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>6candoit@naver.com</td>
                </tr>
              
                <tr>
                  <th>연락처</th>
                  <td>010-1111-1234</td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>서울특별시 용산구 원효로 900</td>
                </tr>
                <tr>
                  <th>마케팅 정보 수신</th>
                  <td>YES</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.my_info_title}>
            <img src={star} alt="*" />플리마켓 지원 현황
          </div>
            
          <div>
            <div className={styles.user_info}>

            <table>
              <tbody>
                
               {  
                  lists &&
                   lists.map((item:any, idx:number) => (
                    <tr key={idx}>
                      <td className={styles.td_title}>{item.storeName}</td>
                      <td style={{ color: "#BDBDBD" }}>{item.createdAt.split('T')[0]}</td>
                      <td className={styles.td_btn}>
                      {item.status === null ? <button className={styles.btn}>대기중</button> : <button className={styles.acp_btn}>승인</button> }                    
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}

export default MyPage;