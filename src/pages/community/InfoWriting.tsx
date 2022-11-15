import React from "react";
import Common from "./Common";
import styles from "./InfoWriting.module.css";

const InfoWriting = () => {
  return (
    <div>
      <Common>

        <div className={styles.wrap}>
          {/* 목록 버튼 */}

          <div className={styles.list}>
            <div>
              <span>{'<'} 이전 글</span>
              <span> | </span>
              <span>다음 글 {'>'}</span>
            </div>
            <div className={styles.list_btn}>목록</div>
          </div>
          {/* 게시글 정보 */}
          <div className={styles.board}>
            <div className={styles.board_title}>제목제목제목</div>
            <div className={styles.board_info}>
              <div>
                <span>wwww8989</span> {/* 작성자 */}
                <span>50</span> {/* 좋아요 */}
                <span>121</span> {/* 조회수 */}
                <span>6</span> {/* 댓글수 */}
              </div>
              <div>
                <span>2022.11.15</span>
                <span>13:45</span>
              </div>
            </div>

            <div className={styles.board_desc}>
              내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구
              내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구
              내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구
              내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구
              내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구
              내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구내용 어쩌구저쩌구합니다 어쩌구저쩌구라네요 어쩌구저쩌구
            </div>

            <div className={styles.feel_btn}>
              <div className={styles.like_btn}>
                좋아요 50
              </div>
              <div className={styles.like_btn}>
                신고하기
              </div>
            </div>
          </div></div>
      </Common>
      <div className={styles.comment_wrap}>
        <div className={styles.inner_wrap}>

        <div className={styles.comment_title}>
          댓글 12
        </div>

        <form style={{fontSize: "0", lineHeight: "0"}}>
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

export default InfoWriting;