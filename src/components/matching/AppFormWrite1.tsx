import React, {useState, useCallback, useRef, useEffect} from "react";
import effect from "../../assets/images/effect.svg";
import styles from "./AppFormWrite1.module.css";
import step1 from "../../assets/images/form/step1.svg";
import nextbtn from "../../assets/images/form/nextbtn.svg";
import star from "../../assets/images/star.svg";
import { useNavigate } from "react-router-dom";
import './subCategory.css';
import { useRecoilState } from "recoil";
import { category1State, returnAddressState, storeNameState, subCategory1State, subCategory2State } from "recoil/ApplicationState";
const AppFormWrite1 = () => {

  const navigate = useNavigate();
  const detailRef = useRef<HTMLDivElement>(null);

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const [subCategory, setSubCategory] = useState<string|null>('');
  const [subCategoryArr, setSubCategoryArr] = useState<string[] | []>([]);

  const [storeName, setStoreName] = useRecoilState(storeNameState);
  const [category, setCategory] = useRecoilState(category1State);
  const [subCategory1, setSubCategory1] = useRecoilState(subCategory1State);
  const [subCategory2, setSubCategory2] = useRecoilState(subCategory2State);
  const [onlineChannel, setOnlineChannel] = useRecoilState(returnAddressState);

  const [address, setAddress] = useRecoilState(returnAddressState);

  const onStoreNameHandler = (event:any) => { 
    console.log(event.currentTarget.value)
    setStoreName(event.currentTarget.value)
  }

  const onCategoryHandler = (event:any) => { 
    console.log(event.currentTarget.value)
    setCategory(event.currentTarget.value)
  }

  const onSubCategoryHandler = (event:any) => { 
    console.log(event.currentTarget.value)
    setSubCategory(event.currentTarget.value)
  }

  const onSubCategory2Handler = (event:any) => { 
    console.log(event.currentTarget.value)
    setSubCategory2(event.currentTarget.value)
  }

  const GetClick = (e:any) => {
    setCurrentClick(e.target.id);
    setCategory(true);
    console.log(e.target.id, category);

  };

  useEffect(() => {
    detailRef.current?.scrollIntoView();

  }, []);

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

  const onKeyUp = useCallback(
    (e:any) => {
    
        /* ?????? ????????????, ?????????*/
        const $SubWrapOuter = document.querySelector('.SubWrapOuter')
        const $SubWrapInner = document.createElement('div')
        $SubWrapInner.className = 'SubWrapInner'
        
        /* ????????? ?????? ????????? ?????? ?????? */
        $SubWrapInner.addEventListener('click', () => {
          $SubWrapOuter?.removeChild($SubWrapInner)
          console.log($SubWrapInner.innerHTML)
          setSubCategoryArr(subCategoryArr.filter((subCategory) => subCategory))
        })

        /* enter ??? ?????? :13 */
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
          console.log('Enter Key ?????????!', e.target.value)
          $SubWrapInner.innerHTML = e.target.value
          $SubWrapOuter?.appendChild($SubWrapInner)
          setSubCategoryArr((subCategoryArr) => [...subCategoryArr, subCategory]);
          setSubCategory('');
        }
      
    },
    [subCategory, subCategoryArr]
  )

  const onOnlineChannelHandler = (event:any) => { 
    console.log(event.currentTarget.value)
    setOnlineChannel(event.currentTarget.value)
  }

  const onAddressHandler = (event:any) => { 
    console.log(event.currentTarget.value)
    setAddress(event.currentTarget.value)
  }

  const onClickNext = () => {
    setSubCategory1(subCategoryArr[0]);
    setSubCategory2(subCategoryArr[1]);
    console.log(subCategory1, subCategory2);
    navigate('/fleamarket/apply/2'); 
  }


  return (
    <div className={styles.app_wrap} ref={detailRef}>
      <div className={styles.app_title}>????????? ??????<img src={effect} alt="*" /></div>
      <div style={{textAlign: "center", marginBottom: "40px" }}><img src={step1} alt="step1"  /> </div>
      
      <div className={styles.app_box}>
        <div className={styles.app_subtitle}>????????? ??????</div>
        <div className={styles.app_inner_box}>

          <div className={styles.app_item}>
            <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>?????????/?????????</div>
            </div>            
            <div><input type="text" value={storeName} onChange={onStoreNameHandler}/></div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>????????????</div>
            </div>
            <div className={styles.form_category}>
              <span id="current" onClick={GetClick}>??????</span>
              <span>??????</span>
              <span>??????</span>
              <span>??????</span>
              <span>??????</span>
              <span>?????????</span>
              <span>??????</span>
              <span>??????</span>
              <span>??????</span>
              <span>?????????</span>
            </div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>?????? ????????????</div>
            </div>
            <div className="SubWrap">
              <input type="text" placeholder="?????? ???????????? ?????????????????? ex) ????????? (?????? 5??? ?????? ??????)"
              className="SubInput"
              value={subCategory}
              onChange={onSubCategoryHandler}
              onKeyUp={onKeyUp}/>
              <div className="SubWrapOuter"></div>
              
            </div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>????????? ?????? ?????? <span>(??????)</span></div>
            </div>
            <div><input type="text" value={onlineChannel} onChange={onOnlineChannelHandler}/></div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>?????? ?????? ?????? <span>(??????)</span></div>
            </div>
            <div >
              <div className={styles.address}>
                <input className={styles.input_address} type="text" placeholder="????????? ??????????????????." value={address} onChange={onAddressHandler}/>
                <button className={styles.btn_address}>?????? ??????</button>
              </div>
              <input type="text" className={styles.div_address} />
              {/* <input type="text" className={styles.div_address} /> */}
            </div>
          </div>

        </div>
      </div>
      <div className={styles.hidden_box}>
        <div className={styles.next_btn_first} ><img src={nextbtn} alt="next" onClick={() => {
        onClickNext();
        }} /></div>
      </div>
      
    </div>
  )
}

export default AppFormWrite1;