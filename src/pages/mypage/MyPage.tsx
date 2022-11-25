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
        console.log(res.data);
        //  setLists(res.data);
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
            <li><img src={star} alt="*" />플리마켓 지원 현황</li></ul>
          <div>


            <div className={styles.wrap}>
              <table>
                <tbody>
                  {
                    lists ?
                    
                      <tr>
                        <td className={styles.td_title}>{lists[0].userName}</td>
                        <td style={{ color: "#BDBDBD" }}>{lists[0].createdAt.split('T')[0]}</td>
                        <td>
                          { lists[0].status ?  <button className={styles.btn}>완료</button> : <button className={styles.btn}>대기</button> }
                        </td>
                      </tr>  
                      :
                      <td>신청 내역이 없습니다.</td>                  
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