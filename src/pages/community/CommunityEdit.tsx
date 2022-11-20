import axios from "axios";
import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Common from "./Common";
import styles from "./CommunityWriting.module.css";

interface MyText {
  title: string,
  note: string,
  img: string;
}

const CommunityEdit = () => {

  const url = 'base_url';
  const location = useLocation();
  const questionBoardId = location.state.questionBoardId;

  const [title, setTitle] = useState(location.state.title);
  const [note, setNote] = useState(location.state.note);
  const onChangeTitle = (e : React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value);}
  const onChangeNote = (e : React.ChangeEvent<HTMLTextAreaElement>) => {setNote(e.target.value);}
  
  const img = null;

  useEffect(() => {
    console.log(questionBoardId, '&', title, '&', note);
    axios.get(`/questions/${questionBoardId}`)
    .then((res) => {
      setTitle(res.data.result.title);
      setNote(res.data.result.note);
    })
  }, [])

  const onSubmitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const atk = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2Y2FuZG9pdEBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY4ODM3NjE0fQ.hJJdVoen8bhxp44rxSWYingne7rDh56ZeABgvX-_9lYmKKR44XqDFqWgkID_nDYoC1A8f1UIP4AtRUR2hiaZiQ';
    axios.defaults.headers.common['Authorization'] = `Bearer ${atk}`;
    axios.patch(`/questions/${questionBoardId}`, {
      title: title,
      note: note,
      img: null
    })
    .then((res) => {
      if(res.data.isSuccess) {
        alert(res.data.message);
        window.location.replace(`/community-qna`);
      }
      else {
        alert(res.data.message);
      }
    })
    .catch((err) => {
      console.log("전송 실패: " + err);
    })
  }

  return (
    <Common>
      
      <form onSubmit={onSubmitForm}>
        <div className={styles.foam_border}>
          <input type="text" value={title} onChange={onChangeTitle} className={styles.text_title} placeholder="제목을 입력하세요" />
          <textarea className={styles.text_note} value={note} onChange={onChangeNote} placeholder="규칙 1.&#13;&#10;규칙 2.&#13;&#10;규칙 3." />
        </div>
        <div className={styles.under_btns}>
          {/* <div>
              <div onClick={() => (handleClickFileInput)}>
                <label htmlFor="input_file" className={styles.file_btn}> 
                  <img src={plus} alt="plus" />
                  <div className={styles.filetext}>파일 첨부하기</div>
                  <input 
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    multiple
                    id="input_file"
                    style={{display: "none"}}
                    onChange={handleFileUpload}/>
                    </label> 
                  </div>
            
            {/* <div className={styles.sub_filetext}>이미지 첨부하기</div>
            <div className={styles.sub_filetext}>파일 첨부하기</div> */}
          {/* </div>     

          <div>
            {fileNames.map((item:any, index:number) => (
              <span key={index}>{item.name} </span>
            ))}
          </div> */}
         
          <button type="submit" className={styles.upload_btn}>수정하기</button>
          
          <div>

          </div>
        </div>
      </form>
    </Common>
  )
}

export default CommunityEdit;