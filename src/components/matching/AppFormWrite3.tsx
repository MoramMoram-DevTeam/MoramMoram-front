import React, { useState, useEffect, useRef } from "react";
import effect from "../../assets/images/effect.svg";
import styles from "./AppFormWrite3.module.css";
import step3 from "../../assets/images/form/step3.svg";
import star from "../../assets/images/star.svg";
import image from "../../assets/images/image.svg";
import prevbtn from "../../assets/images/form/prevbtn.svg";
import submitbtn from "../../assets/images/form/submitbtn.svg";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { category1State, lightState, marketExpState, onlineChannelState, onlineExpState, priceAvgState, requestState, storeNameState, subCategory1State, subCategory2State } from "recoil/ApplicationState";

const AppFormWrite3 = () => {

  const navigate = useNavigate();
  const detailRef = useRef<HTMLDivElement>(null);

  const storeName = useRecoilValue(storeNameState);
  const marketExp = useRecoilValue(marketExpState);
  const onlineExp = useRecoilValue(onlineExpState);
  const onlineChannel = useRecoilValue(onlineChannelState);
  const category1 = useRecoilValue(category1State);
  const subCategory1 = useRecoilValue(subCategory1State);
  const subCategory2 = useRecoilValue(subCategory2State);
  const light = useRecoilValue(lightState);

  const [money, setMoney] = useRecoilState(priceAvgState);  
  const [etcNote, setEtcNote] = useRecoilState(requestState);

  const [currentMoney, setCurrentMoney] = useState(null);

  const [prevMoney, setPrevMoney] = useState(null);

  const onEtcNote = (e:any) => {
    setEtcNote(e.target.value);
  }


  const CurrentMoneyClick = (e:any) => {
    setCurrentMoney(e.target.id);
    setMoney("1만원~2만원");
    
  }

  const onClickTest = () => {
    alert('신청이 완료되었습니다.');
    navigate('/fleamarket/apply/4');
    window.scrollTo(0,0);
  }

  const onClickSubmit = async (e:any) => {
    e.preventDefault();
    const data = {
      storeName: storeName,
      marketExp: 2,
      onlineExp: onlineExp,
      onlineChannel: onlineChannel,
      priceAvg: money,
      category1: category1,
      subCategory1: subCategory1,
      subCategory2: subCategory2,
      light: light,
      request: etcNote
    };
    // let formData = new FormData();
		// formData.append('data', new Blob([JSON.stringify(data)] , {type: "application/json"}));
    // formData.append('certificate', null);
		// formData.append('itemImg', null);

    // const params = new URLSearchParams();
    // params.append('m_id', this.);
    try{
      const response = await axios.post('/applications/new', data, {
       
        params:{'m_id': 1},
        headers: { "Content-Type": `multipart/form-data`}
      }
      )
    
      if(response.data) {
        console.log(response.data);
        alert(response.data.marketId);
        window.location.replace('/fleamarket/apply/4');
      }
      else {
        if(response.data.status === "NO_AUTHORITY")
          alert(response.data.message);

      }    
      
  } catch(err) {
      alert("글을 등록하지 못했습니다.");
      console.log(err);
    }

  }
  useEffect(() => {
    detailRef.current?.scrollIntoView();

  }, []);

  useEffect(() => {    
    if (currentMoney !== null) {
      let current = document.getElementById(currentMoney);
      console.log(current);
      current.style.backgroundColor = "#FFB600";
      current.style.color = "#00084A";
      current.style.border = "2px solid #00084A";
      
    }

    if (prevMoney!== null) {
      let prev = document.getElementById(prevMoney);
      prev.style.backgroundColor = "#FFFFFF";
      prev.style.color = "#BABABA";
      prev.style.border = "2px solid #BABABA";
    }
    setPrevMoney(currentMoney);
 
},[currentMoney]);

  return (
    <div className={styles.app_wrap} ref={detailRef}>
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
              <span id="currentMoney" onClick={CurrentMoneyClick}>1만원~2만원</span>
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
                
                <div className={styles.picture_inbox}>
                  {/* <img src={image} className={styles.pic_icon}/>dsffdsdffdsfsd.jpg */}
                </div>

              </div>
              </div>
          </div>

          <div className={styles.app_item}>
            <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>기타 요청사항 <span>(선택)</span></div>
            </div>
            <div><input type="text" className={styles.etc_box} value={etcNote} onChange={onEtcNote}/></div>
          </div>

        </div>
      </div>
      <div className={styles.under_box}>
        <div><img src={prevbtn} alt="prev" onClick={() => {
         navigate('/fleamarket/apply/2');        
        }} />
        <div onClick={onClickSubmit}
        // onClick={(e:any) => {
        //   onClickSubmit(e);
        //  navigate('/fleamarket/apply/4');        
        // }}
        ><img src={submitbtn} alt="subbtn" />
      </div>
        
      </div>
      </div>
    </div>
  )
}

export default AppFormWrite3;