import axios from "axios";
import React, { useState, useEffect } from "react";
import Common from "./Common";
import styles from "./CommunityDetail.module.css";
import left from "../../assets/images/lefticon.svg";
import right from "../../assets/images/righticon.svg";
import like from "../../assets/images/redlike.svg";
import report from "../../assets/images/report.svg";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const CommunityDetail = () => {
  const url = 'BASE_URL';
  const params:any = useParams().questionBoardId;
  const navigate = useNavigate();
  const location = useLocation();
  // const questionBoard = location.state.questionBoardId;
  const [lists, setLists] = useState<any>();

  const getLists = async () => {    

    try {
      axios.get(`/questions/${params}`)
        .then(
          (response) => {
            if(response.data.isSuccess)
              setLists(response.data.result);
              
              console.log('response.data.result: ', response.data.result)
          }
        );
    } catch (err) {
      console.log('communitu detail err', err)

    }
  }

  useEffect(() => {
    getLists();
}, []);

const prevQna = ({}) => {
  lists && navigate(`/community/${lists.questionBoardId - 1}`);
  window.location.reload();
}

const nextQna = ({}) => {
  lists && navigate(`/community/${lists.questionBoardId + 1}`);
  window.location.reload();
}

const deleteDesc = () => {
  const value = window.confirm("정말로 삭제하시겠습니까?");
  if (value) {
    axios.delete(`/questions/${params}`)
    .then((response) => {
      if(response.data.result) {
          alert('삭제되었습니다.');
          navigate('/community/list');
        }
      })
    }
}

  return (
    <div>
      <Common title="질문게시판">
      { lists &&
        <div className={styles.wrap}>
          {/* 목록 버튼 */}

          <div className={styles.list}>
            <div className={styles.prev_next}>
              <span  className={styles.prev_span} onClick={prevQna}><img src={left} alt="<" /> 이전 글</span>
              <span className={styles.line}></span>
              <span className={styles.next_span} onClick={nextQna}>다음 글 <img src={right} alt=">" /></span>
            </div>
            <div className={styles.list_btn}><Link to="/community/list">목록</Link> </div>
          </div>
          {/* 게시글 정보 */lists &&
          <>
          
            <div className={styles.board} key={lists.questionBoardId}>
            <div className={styles.board_title}>{lists.title}</div>
            <div className={styles.board_info}>
              <div>
                <span>{lists.name}</span> {/* 작성자 */}
                <span>{lists.likeCnt}</span> {/* 좋아요 */}
                <span>{lists.viewCnt}</span> {/* 조회수 */}
                <span>{lists.commentCnt}</span> {/* 댓글수 */}
                <button type="button" onClick={() => (navigate(`/community/${lists.questionBoardId}/edit`, {
                  state: {
                    questionBoardId: lists.questionBoardId
                  }
                }))}>수정</button>
                <button type="button" onClick={deleteDesc}>삭제</button>
                <div>

              </div>
              </div>
              <div>
                <span>{lists.boardDate}</span> {/*위는 날짜 밑은 시간 */}
                
              </div>
            </div>
            
            <div className={styles.board_desc}>
              {lists.note}
            </div>

            <div className={styles.feel_btn}>
              <div className={styles.like_btn}>
                <img src={like} alt="like" style={{marginRight: "5px"}}/> 좋아요 {lists.likeCnt}
              </div>
              <div className={styles.report_btn}>
                <img src={report} alt="report" style={{marginRight: "5px"}}/>신고하기
              </div>
            </div>

          </div>
          </>
          }
          
        </div>
      }
      </Common>
      <div className={styles.comment_wrap}>
        <div className={styles.inner_wrap}>

          <div className={styles.comment_title}>
            댓글 12
          </div>

          <form style={{ fontSize: "0", lineHeight: "0" }}>
            <div><textarea placeholder="댓글을 입력해 주세요." className={styles.comment_area} /></div>
            <button type="button" className={styles.comment_btn}>등록하기</button>
          </form>
          {/* 댓글 리스트 */}
          <div className={styles.comment_list}>
            <div className={styles.comment_user}>gogoair222</div>
            <div className={styles.comment_desc}> 댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용</div>
            <div className={styles.comment_time}>15분 전</div>
          </div>

          <div className={styles.comment_list}>
            <div className={styles.comment_user}>gogoair222</div>
            <div className={styles.comment_desc}> 댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용</div>
            <div className={styles.comment_time}>15분 전</div>
          </div>

          <div className={styles.comment_list}>
            <div className={styles.comment_user}>gogoair222</div>
            <div className={styles.comment_desc}> 댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용</div>
            <div className={styles.comment_time}>15분 전</div>
          </div>

        </div>


      </div>


    </div>

  )
}

export default CommunityDetail;