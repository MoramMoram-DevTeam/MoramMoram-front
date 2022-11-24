import React from "react";
import effect from "../../assets/images/effect.svg";
import styles from "./AppFormWrite3.module.css";
import step3 from "../../assets/images/form/step3.svg";
import star from "../../assets/images/star.svg";
import image from "../../assets/images/image.svg";
import prevbtn from "../../assets/images/form/prevbtn.svg";
import submitbtn from "../../assets/images/form/submitbtn.svg";

import { useNavigate } from "react-router-dom";

const AppFormWrite3 = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청서 작성<img src={effect} alt="*" /></div>
      <div style={{textAlign: "center", marginBottom: "40px"}}><img src={step3} alt="step3" style={{width: "330px", height: "101px"}} /> </div>
      
      <div className={styles.app_box}>
        <div className={styles.app_subtitle}>판매 품목</div>
        <div className={styles.app_inner_box}>

          <div className={styles.app_item}>
            <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>상품 평균 가격대</div>
            </div>
             
            <div className={styles.price_category}>
               <span>1만원 미만</span>
              <span>1만원~2만원</span>
              <span>2만원~3만원</span>
              <span>3만원~4만원</span>
              <span>4만원~5만원</span>
              <span>5만원 이상</span>
            </div>
          </div>

          <div className={styles.app_item}>
            <div>
          <div className={styles.form_title} style={{ paddingTop: "7px"}}>
              <img src={star} alt="*"/>
              <div className={styles.ex_title}>상품 사진 첨부 <span>(선택)</span></div>
          </div> 
          </div>
            <div>
              <div className={styles.picture}>
                <input type="text" placeholder="사진을 첨부하세요"/>
                <button>첨부하기</button>
              </div>
              <div className={styles.picture_desc}>· 최대 5장까지 첨부 가능 {"("}JPG/PNG 한정{")"}</div>
              <div className={styles.picture_desc}>· 사진 첨부 시 선정 확률이 올라갑니다.</div>
              <div className={styles.picture_box}>
                {/* 파일 공간 */}
                
                <div className={styles.picture_inbox}><img src={image} className={styles.pic_icon}/>dsffdsdffdsfsd.jpg</div>

              </div>
              </div>
          </div>

          <div className={styles.app_item}>
            <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>기타 요청사항 <span>(선택)</span></div>
            </div>
            <div><input type="text" className={styles.etc_box}/></div>
          </div>

        </div>
      </div>
      <div className={styles.under_box}>
        <div><img src={prevbtn} alt="prev" onClick={() => {
         navigate('/fleamarket/apply/2');        
        }} />
        <div><img src={submitbtn} alt="subbtn" onClick={() => {
         navigate('/fleamarket/apply/4');        
        }} />
      </div>
        
      </div>
      </div>
    </div>
  )
}

export default AppFormWrite3;