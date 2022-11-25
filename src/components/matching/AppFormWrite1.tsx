import React, {useState, useCallback} from "react";
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

  const onKeyUp = useCallback(
    (e:any) => {
    
        /* 요소 불러오기, 만들기*/
        const $SubWrapOuter = document.querySelector('.SubWrapOuter')
        const $SubWrapInner = document.createElement('div')
        $SubWrapInner.className = 'SubWrapInner'
        
        /* 태그를 클릭 이벤트 관련 로직 */
        $SubWrapInner.addEventListener('click', () => {
          $SubWrapOuter?.removeChild($SubWrapInner)
          console.log($SubWrapInner.innerHTML)
          setSubCategoryArr(subCategoryArr.filter((subCategory) => subCategory))
        })

        /* enter 키 코드 :13 */
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
          console.log('Enter Key 입력됨!', e.target.value)
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
            <div><input type="text" value={storeName} onChange={onStoreNameHandler}/></div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>카테고리</div>
            </div>
            <div className={styles.form_category}>
              <span onClick={() => {setCategory(!category); console.log(category);}}>공예</span>
              <span>키친</span>
              <span>패션</span>
              <span>의류</span>
              <span>팬시</span>
              <span>디지털</span>
              <span>데코</span>
              <span>푸드</span>
              <span>뷰티</span>
              <span>주얼리</span>
            </div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>세부 카테고리</div>
            </div>
            <div className="SubWrap">
              <input type="text" placeholder="관련 키워드를 입력해주세요 ex) #귀걸이 (최대 5개 입력 가능)"
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
              <div>온라인 채널 주소 <span>(선택)</span></div>
            </div>
            <div><input type="text" value={onlineChannel} onChange={onOnlineChannelHandler}/></div>
          </div>

          <div className={styles.app_item}>
          <div className={styles.form_title}>
              <img src={star} alt="*" />
              <div>반품 주소 입력 <span>(선택)</span></div>
            </div>
            <div >
              <div className={styles.address}>
                <input className={styles.input_address} type="text" placeholder="주소를 입력해주세요." value={address} onChange={onAddressHandler}/>
                <button className={styles.btn_address}>주소 찾기</button>
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