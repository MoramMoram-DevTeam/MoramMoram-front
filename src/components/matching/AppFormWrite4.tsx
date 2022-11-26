import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import styles from "./AppFormWrite4.module.css";
import effect from "../../assets/images/effect.svg";
import star from "../../assets/images/star.svg";
import axios from "axios";

const AppFormWrite4 = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const appId = location.state.applicationId;
  const detailRef = useRef<HTMLDivElement>(null);
  const [appLists, setAppLists] = useState<any>();

  const getAppForm = () => {
    axios.get(`/applications/${appId}`)
      .then((res) => {
        if (res.data) {
          setAppLists(res.data);
        }
      })
  }

  const onClickTr = () => {
    navigate('/fleamarket/apply/result');
  }

  useEffect(() => {
    detailRef.current?.scrollIntoView();
    getAppForm();

  }, []);
  

  return (
    <div className={styles.app_wrap} ref={detailRef}>
      <div className={styles.app_title}>신청서 작성<img src={effect} alt="*" /></div>

      <div className={styles.app_box} >
        <div className={styles.app_subtitle}>신청 완료!</div>
        


      {
        appLists &&
<div>
          
        <div>
            <div className={styles.wrap}>
            <div className={styles.user_title}>{appLists.userName}님의 신청내역</div>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />브랜드/상점명</td>
                    <td className=''>{appLists.storeName}</td>                    
                  </tr>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />카테고리/세부카테고리</td>
                    <td className=''>{appLists.category1 && '공예'} <span className={styles.span_box}> <span>{appLists.subCategory1 && `#${appLists.subCategory1}`}</span>
                    <span>{appLists.subCategory2 && `#${appLists.subCategory2}`}</span></span> </td>                    
                  </tr>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />상품 평균 가격대</td>
                    <td className=''>{appLists.priceAvg}</td>                    
                  </tr>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />온라인 채널 주소</td>
                    <td className=''>{appLists.onlineChannel}</td>                    
                  </tr>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />반품 주소</td>
                    <td className=''>{appLists.returnAddress}</td>                    
                  </tr>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />플리마켓 참여 경험</td>
                    <td className=''>{appLists.marketExp ? 'O' : 'X'}</td>                    
                  </tr>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />온라인 판매 경험</td>
                    <td className=''>{appLists.onlineExp ? 'O' : 'X'}</td>                    
                  </tr>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />보유 집기</td>
                    <td className=''>{appLists.light && '조명'}</td>                    
                  </tr>
                  <tr>
                    <td className={styles.td_title}><img src={star} alt="*" />기타 요청 사항</td>
                    <td className=''>{appLists.request}</td>                    
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
          </div>
      }
          
        
        <button className={styles.submit_btn} onClick={() => {
    navigate('/mypage');
  }}>신청 결과 페이지 바로가기</button>
      </div>
      
        

      </div>
  )
}

export default AppFormWrite4;