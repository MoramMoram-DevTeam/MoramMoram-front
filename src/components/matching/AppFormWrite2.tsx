import React, {useEffect, useState} from "react";
import effect from "../../assets/images/effect.svg";
import styles from "./AppFormWrite2.module.css";
import step2 from "../../assets/images/form/step2.svg";

import image from "../../assets/images/image.svg";
import star from "../../assets/images/star.svg";

import prevbtn from "../../assets/images/form/prevbtn.svg";
import nextbtn from "../../assets/images/form/nextbtn.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { lightState, marketExpState, onlineExpState } from "recoil/ApplicationState";

const AppFormWrite2 = () => {

  const navigate = useNavigate();
  const onClickNext = () => {
    navigate('/fleamarket/apply/2');
  }

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  const [zipClick, setZipClick] = useState(null);
  const [pzipClick, setPzipClick] = useState(null);
  const [lClick, setlClick] = useState(null);
  const [kClick, setkClick] = useState(null);


  const [marketExp, setMarketExp] =useRecoilState(marketExpState); //플리마켓 경험  
  const [onlineExp, setOnlineExp] = useRecoilState(onlineExpState); //온라인 판매 경험
  const [having, setHaving] = useRecoilState(lightState); //보유 집기
  
  const GetClick = (e:any) => {
    setCurrentClick(e.target.id);
    setMarketExp(!marketExp);
    console.log(e.target.id, marketExp);

  };

  const ZipClick = (e:any) => {
    setZipClick(e.target.id);
    setOnlineExp(!onlineExp);
  }

  const onlClick = (e:any) => {
    setlClick(e.target.id);
    setHaving(!having);
  }

  useEffect(() => {    
    if (currentClick !== null) {
      let current = document.getElementById(currentClick);
      console.log(current);
      current.style.backgroundColor = "#FFB600";
      current.style.color = "#00084A";
      current.style.border = "2px solid #00084A";
      
    }

    if (prevClick !== null) {
      let prev = document.getElementById(prevClick);
      prev.style.backgroundColor = "#FFFFFF";
      prev.style.color = "#BABABA";
      prev.style.border = "2px solid #BABABA";
    }
    setPrevClick(currentClick);
 
},[currentClick]);

useEffect(() => {    
  if (zipClick !== null) {
    let current = document.getElementById(zipClick);
    console.log(current);
    current.style.backgroundColor = "#FFB600";
    current.style.color = "#00084A";
    current.style.border = "2px solid #00084A";
    
  }

  if (pzipClick !== null) {
    let prev = document.getElementById(pzipClick);
    prev.style.backgroundColor = "#FFFFFF";
    prev.style.color = "#BABABA";
    prev.style.border = "2px solid #BABABA";
  }
  setPrevClick(zipClick);

},[zipClick]);

useEffect(() => {    
  if (lClick !== null) {
    let current = document.getElementById(lClick);
    console.log(current);
    current.style.backgroundColor = "#FFB600";
    current.style.color = "#00084A";
    current.style.border = "2px solid #00084A";
    
  }

  if (kClick !== null) {
    let prev = document.getElementById(kClick);
    prev.style.backgroundColor = "#FFFFFF";
    prev.style.color = "#BABABA";
    prev.style.border = "2px solid #BABABA";
  }
  setkClick(lClick);

},[lClick]);

  return (
    <div className={styles.app_wrap}>
      <div className={styles.app_title}>신청서 작성<img src={effect} alt="*" /></div>
      <div style={{textAlign: "center", marginBottom: "40px"}}><img src={step2} alt="step2"  /> </div>
      
      <div className={styles.app_box}>
        <div className={styles.app_title_box}>
          <div className={styles.app_subtitle}>판매 경험</div>
          <div className={styles.app_desc}>선택하기 어려운 경우, 경험이나 보유 집기가 없을 경우 ‘없음'으로 표시하시고 추가 작성이 필요하다면 뒷페이지 ‘기타 요청 사항'란에 입력해주세요.</div>
        </div>

        <div className={styles.app_inner_box}>

        <div className={styles.ex_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
            <div>플리마켓 참여 경험</div>
            </div>
            <div className={styles.form_experience}>
              <span id="user" onClick={GetClick}>유</span>
              <span id="company" onClick={GetClick}>무</span>
            
          </div>
        </div>

          <div className={styles.ex_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
            <div>온라인 판매 경험</div>
            </div>
            <div className={styles.form_experience}>
              <span id="zip" onClick={ZipClick}>유</span>
              <span id="pzip" onClick={ZipClick}>무</span>
            </div>
          
        </div>
          <div className={styles.app_item}>
          <div className={styles.form_title} style={{ paddingTop: "7px"}}>
              <img src={star} alt="*" />
              <div>보유 집기</div>
            </div>
            <div className={styles.having_category}>
              <span>가판대</span>
              <span>진열대</span>
              <span id="lClick" onClick={onlClick} >조명</span>
              <span>보자기</span>
              <span>행거</span>
              <span>마네킹</span>
              <span>거울</span>
              <span>없음</span>
            </div>
          </div>

          <div className={styles.app_item}>
            <div>
          <div className={styles.form_title} style={{ paddingTop: "7px"}}>
              <img src={star} alt="*"/>
              <div className={styles.ex_title}>플리마켓 경험 사진 첨부</div>
          </div> <div style={{color: "#BABABA", paddingLeft: "10px", paddingTop: "2px"}}>(선택)</div>
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


        </div>
      </div>
      <div className={styles.under_box}>
        <div>
        <div><img src={prevbtn} alt="prev" onClick={() => {
         navigate('/fleamarket/apply/1');        
        }} /></div>
        <div><img src={nextbtn} alt="next"  onClick={() => {
         navigate('/fleamarket/apply/3');        
        }}/></div>
        </div>
      
      </div>
      
    </div>
  )
}

export default AppFormWrite2;