import axios from "axios";
import React, {useState, useEffect, useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";
import fleaPic from "../../assets/images/fleaPic.svg";
import styles from "./FleaMarketDetail.module.css";
import effect from "../../assets/images/effect.svg";
import star from "../../assets/images/star.svg";
import like from "../../assets/images/redlike.svg";

const FleaMarketDetail = () => {
  const navigate = useNavigate();
  const pr:any = useParams().id;
  const [fleaDetail, setFleaDetail] = useState<any>([]);
  const detailRef = useRef<HTMLDivElement>(null);

  const [liked, setLiked] = useState(false);
    
  const getLists = async () => {

    await axios.get('/markets/',{
      params: {m_id: pr}
    })
    .then((res) => {
      setFleaDetail(res.data);
      console.log('detail', res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    detailRef.current?.scrollIntoView();
    getLists();
}, []);

  const onClickLike = async () => {
    fleaDetail &&
    await axios.post('/wish',{
      marketId: fleaDetail.officeId
    })
    .then((res) => {
      alert(res.data.statusMessage);
      setLiked(!liked);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const onClickApply = () => {
    navigate('/fleamarket/apply/1');
  }

  return (
    
      <div className={styles.detail_wrap} ref={detailRef}>
        <div className={styles.title}>플리마켓 상세 정보<img src={effect} alt="*" /></div>
        
        {fleaDetail && 
        <div>
        <div className={styles.top}>
          <div className={styles.pic}><img src={fleaDetail.mimg} alt="picture" /></div>
          <div>
            <div className={styles.start}>{fleaDetail.start}</div>
            <div className={styles.mname}>{fleaDetail.mname}</div>
            <div className={styles.place}>{fleaDetail.place}</div>
            <div className={styles.info}>행사 종료일: {fleaDetail.end}</div>
            <div className={styles.info}>카테고리: {fleaDetail.category}</div>
            <div className={styles.apply_btn} onClick={onClickApply}>참가 신청</div>
          </div>
        </div>
        

        <div className={styles.bottom}>
          <div className={styles.bottom_title_box}>
            <div className={styles.bottom_title}>상세 정보</div>
            <div className={styles.like_btn} onClick={onClickLike} id="zzim"><img src={like} alt="like" style={{marginRight: "5px"}}/>{liked ? '완료': '찜하기'}</div>
          </div>

          <div className={styles.desc}>
            <div className={styles.desc_info}>
              <div className={styles.desc_title}><img src={star} alt="*" />플리마켓 참여 조건 안내</div>
              <div className={styles.desc_note}>모든 품목 가능합니다.<br></br> 의류마감<br></br> 일일셀러님은 최소 2일 이상 신청 가능합니다.<br></br> 현장지원: 테이블(1200*600), 조명, 의자, 전기</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.desc_info}>
              <div className={styles.desc_title}><img src={star} alt="*" />판매 주요 사항</div>
              <div className={styles.desc_note}>8월달, 9월달, 10월달 월 고정비용 및 참가비<br></br> 메인 월고정 월 130만원<br></br> 금토일(공휴일 포함): 일일 8만원<br></br> 월화수목 일일 4만원</div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.desc_info}>
              <div className={styles.desc_title}><img src={star} alt="*" />주최측 한마디</div>
              <div className={styles.desc_note}>{fleaDetail.mnote}</div>
            </div>
          </div>
        </div>
        </div>
        }
      </div>
    
  )
}

export default FleaMarketDetail;