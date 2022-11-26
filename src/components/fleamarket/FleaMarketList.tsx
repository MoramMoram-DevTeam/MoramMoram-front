import React, { useState, useEffect } from "react";
import greysearch from "../../assets/images/greysearch.svg";
import styles from "./FleaMarketList.module.css";
import effect from "../../assets/images/effect.svg";
import axios from "axios";
import InfiniteFleaList from "./InfiniteFleaList";
import FleaCarousel from "components/common/Carousel/FleaCarousel";
import RecommendCarousel from "components/common/Carousel/RecommendCarousel";

export interface FleaInfo {
  id: number
  officeId: number
  start: string
  end: string
  place: string
  category: string
  open: boolean
  marketName: string
  mnote: string
  mimg: string
}

const FleaMarketList = () => {

  const [FLists, setFLists] = useState<FleaInfo[] | undefined>([]);
  const [keyword, setKeyword] = useState<string>();
  const onKeywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => (
    setKeyword(event.currentTarget.value)
    
  )
 

  const onClickSearch = async () => {
    if(keyword !== '') {
      await axios.get('/markets/search',{
        params: {m_name: keyword}
      })
      .then((res) => {
        setFLists(res.data);
        console.log('FLists: ',FLists);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
  


  return (
    <div>
      <div className={styles.inner_box}>
        <div className={styles.title}>플리마켓<img src={effect} alt="*" /></div>
        <div className={styles.desc}>플리마켓 정보를 알고 싶다면? 모람모람에서 모든 플리마켓 일정을 확인해보세요!</div>

        <div className={styles.searchbox}>
          <input type="text" placeholder="검색어를 입력하세요" id="keyword" value={keyword || ''} onChange={onKeywordHandler} />
          <img src={greysearch} alt="search" onClick={() => (onClickSearch)}/>
        </div>
      </div>
      {/* 신청 마감 임박 */}
      <div className={styles.deadline_box}>

        <div className={styles.inner_box}>
          <div className={styles.deadline_title}>신청 마감 임박!!</div>
            <FleaCarousel />
        </div>

        <div className={styles.inner_box}>
          <div className={styles.deadline_title}>많은 셀러가 찾아본 플리마켓</div>
            <RecommendCarousel />
        </div>

        
      </div>     
      <div className={styles.apply_title }>신청 가능 플리마켓</div>
      <InfiniteFleaList />
    </div>
  )
}

export default FleaMarketList;