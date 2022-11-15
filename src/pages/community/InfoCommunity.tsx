import React from "react";
import styles from "./InfoCommunity.module.css";
import plus from "../../assets/images/plus.svg";
import Common from "./Common";



const InfoCommunity = () => {
  return (
    <Common>
      
      <form>
        <div className={styles.foam_border}>
          <input type="text" className={styles.text_title} placeholder="제목을 입력하세요" />
          <textarea className={styles.text_note} placeholder="규칙 1.&#13;&#10;규칙 2.&#13;&#10;규칙 3." />
        </div>
        <div className={styles.under_btns}>
          <div>
            <div className={styles.file_btn}>
                <img src={plus} alt="plus" />
                <div className={styles.filetext}>파일 첨부하기</div>
            </div>
            <div className={styles.sub_filetext}>이미지 첨부하기</div>
            <div className={styles.sub_filetext}>파일 첨부하기</div>
          </div>      
          <button type="button" className={styles.upload_btn}>글 올리기</button>
          
          <div>

          </div>
        </div>
      </form>
    </Common>
  )

}

export default InfoCommunity;