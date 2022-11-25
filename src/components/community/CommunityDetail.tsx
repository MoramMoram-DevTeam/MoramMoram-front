import axios from "axios";
import React, {useState} from "react";
import styles from "./CommunityDetail.module.css";
import left from "../../assets/images/lefticon.svg";
import right from "../../assets/images/righticon.svg";
import like from "../../assets/images/redlike.svg";
import report from "../../assets/images/report.svg";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import heart from "../../assets/images/community/heart.svg";
import eye from "../../assets/images/community/eye.svg";
import styled from "styled-components";

const LikeBtn = styled.div`
width: 152px;
height: 49px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;

font-size: 1.25rem;
font-family: 'SUIT-Medium';
color: #00084A;
border: 2px solid #00084A;
cursor: pointer;
`

const CommunityDetail = ({ lists, url, prevBtn, nextBtn }: any) => {

  const params = useParams().questionBoardId;
  const navigate = useNavigate();
  const [liked, setLiked] = useState();
  const [isLikeStatus, setIsLikeState] = useState();

  const deleteDesc = () => {
    const value = window.confirm("정말로 삭제하시겠습니까?");
    if (value) {
      axios.delete(`/questions/${params}/status/deleted`)
        .then((response) => {
          if (response.data.result) {
            alert('삭제되었습니다.');
            navigate(`/community/${url}`);
          }
        })
    }
  }

  const onClicklike = () => {
    axios.post(`/questions/${params}/like`, {
        post_id: params
      })
        .then((response) => {
          if (response.data.isSuccess) {
            setLiked(response.data.result);
            window.location.reload();
          }
        })
        .catch((err) => console.log(err))
    }
  

  return (
    <div>
      {
    lists &&

    <div className={styles.wrap}>
      <div className={styles.list}>
        <div className={styles.prev_next}>
          <span className={styles.prev_span} onClick={prevBtn}><img src={left} alt="<" /> 이전 글</span>
          <span className={styles.line}></span>
          <span className={styles.next_span} onClick={nextBtn}>다음 글 <img src={right} alt=">" /></span>
        </div>
        {
          url === "questions"
          ?
          <div className={styles.list_btn}><Link to='/community/questions'>목록</Link> </div>
          :
          <div className={styles.list_btn}><Link to='/community/tips'>목록</Link> </div>
        }
      </div>

      <>

        <div className={styles.board} key={lists.tipBoardId}>
          <div className={styles.board_title}>{lists.title}</div>
          <div className={styles.board_info}>
            <div>
              <span>{lists.name}</span> {/* 작성자 */}
              <span className={styles.line}></span> {/* 작성자 */}
              <span><img src={heart} alt="♡" className={styles.icon}/>{lists.likeCnt}</span> {/* 좋아요 */}
              <span><img src={eye} alt="*" className={styles.icon}/>{lists.viewCnt}</span> {/* 조회수 */}
              
              
              <button type="button" className={styles.btn} onClick={() => (navigate(`/community/questions/${lists.questionBoardId}/edit`, {
                state: {
                  questionBoardId: lists.questionBoardId
                }
              }))}>수정</button>
              <button type="button" className={styles.btn} onClick={deleteDesc}>삭제</button>
             
              <div>

              </div>
            </div>
            <div>
              <span>{lists.boardDate}</span>
            </div>
          </div>

          <div className={styles.board_desc}>
            {lists.note}
          </div>

          <div className={styles.feel_btn} onClick={onClicklike}>
         
              <div className={styles.like_btn}>
                <img src={like} alt="like" style={{ marginRight: "5px" }} /> 좋아요 {lists.likeCnt}
              </div>
             
           
            <div className={styles.report_btn}>
              <img src={report} alt="report" style={{ marginRight: "5px" }} />신고하기
            </div>
          </div>

        </div>
      </> </div>
  }
  </div>
  )
}

export default CommunityDetail;
