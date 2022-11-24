import React from "react";
import effect from "../../assets/images/effect.svg";
import styles from "./AppFormWrite1.module.css";
import step1 from "../../assets/images/form/step1.svg";
import nextbtn from "../../assets/images/form/nextbtn.svg";
import star from "../../assets/images/star.svg";
import { useNavigate } from "react-router-dom";

const AppFormWrite1 = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청서 작성<img src={effect} alt="*" /></div>
      <div style={{textAlign: "center", marginBottom: "40px" }}><img src={step1} alt="step1"  /> </div>
      
      <div className={styles.app_box}>
        <div className={styles.app_subtitle}>판매자 정보</div>
        <div className={styles.app_inner_box}>

          <div className={styles.app_item}>
            <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>브랜드/상점명</div>
            </div>            
            <div><input type="text"/></div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>카테고리</div>
            </div>
            <div className={styles.form_category}>
              <span>공예</span>
              <span>공예</span>
              <span>공예</span>
              <span>공예</span>
              <span>공예</span>
              <span>공예</span>
              <span>공예</span>
              <span>공예</span>
              <span>공예</span>
              <span>공예</span>
            </div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>세부 카테고리</div>
            </div>
            <div><input type="text" placeholder="관련 키워드를 입력해주세요 ex) #귀걸이 (최대 5개 입력 가능)"/></div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>온라인 채널 주소 <span>(선택)</span></div>
            </div>
            <div><input type="text"/></div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>반품 주소 입력 <span>(선택)</span></div>
            </div>
            <div >
              <div className={styles.address}>
                <input className={styles.input_address} type="text" placeholder="주소를 입력해주세요."/>
                <button className={styles.btn_address}>주소 찾기</button>
              </div>
              <div className={styles.div_address}></div>
              <div className={styles.div_address}></div>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.hidden_box}>
        <div className={styles.next_btn_first} ><img src={nextbtn} alt="next" onClick={() => {
         navigate('/fleamarket/apply/2');        
        }} /></div>
      </div>
      
    </div>
  )
}

export default AppFormWrite1;