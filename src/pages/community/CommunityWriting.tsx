import React, { useState, useRef } from "react";
import styles from "./CommunityWriting.module.css";
import plus from "../../assets/images/plus.svg";
import Common from "./Common";
import axios from "axios";
import {useRecoilValue} from "recoil";
import {atkState} from "recoil/atkState"
import { timeLog } from "console";
// import axios from "axios";

const CommunityWriting = () => {

  const url = 'BASE_URL';

  const [title, setTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');


  const onChangeTitle = (e : React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value);}
  const onChangeNote = (e : React.ChangeEvent<HTMLTextAreaElement>) => {setNote(e.target.value);}

  /*파일 업로드 */
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileNames, setFileNames] = useState<any>([]);

  const [sendFiles, setSendFiles] = useState<any>(null);

  const handleClickFileInput = (e:any) => {
    fileInputRef.current?.click();
    e.preventDefault();
  }

  const handleFileUpload =(e:React.ChangeEvent<HTMLInputElement>) => {
    const fileArr:any = e.target.files;
    let nameArr:Array<string> = [];
    let fileURLs:Array<any> = [];
    let file;

    for(let i:number = 0; i < fileArr.length; i++ ) {
     file = fileArr[i];
     nameArr.push(fileArr[i]);
    let reader = new FileReader();

     reader.onload = () => {
      fileURLs[i] = reader.result;

      setSendFiles([...fileURLs]);
     }
     reader.readAsDataURL(file);
    }
    setFileNames(nameArr); 
  }

  /*폼 제출 */

  const onSubmitForm = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try{
      const response = await axios.post('/questions', {
      title: title,
      note: note,
      img: sendFiles === null ? null : sendFiles
      })
    
      if(response.data.isSuccess) {
        alert(response.data.message);
      }
      else {
        alert(response.data.message);
      }    
      e.preventDefault();
  } catch(err) {
      alert("전송 실패: " + err)
    }

  }  

  return (
    <Common>
      
      <form onSubmit={onSubmitForm}>
        <div className={styles.foam_border}>
          <input type="text" value={title} onChange={onChangeTitle} className={styles.text_title} placeholder="제목을 입력하세요" />
          <textarea className={styles.text_note} value={note} onChange={onChangeNote} placeholder="규칙 1.&#13;&#10;규칙 2.&#13;&#10;규칙 3." />
        </div>
        <div className={styles.under_btns}>
          <div>
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
                    ref={fileInputRef}
                    onChange={handleFileUpload}/>
                    </label> 
                  </div>
            
            {/* <div className={styles.sub_filetext}>이미지 첨부하기</div>
            <div className={styles.sub_filetext}>파일 첨부하기</div> */}
          </div>     

          <div>
            {fileNames.map((item:any, index:number) => (
              <span key={index}>{item.name} </span>
            ))}
          </div>
         
          <button type="submit" className={styles.upload_btn}>글 올리기</button>
          
          <div>

          </div>
        </div>
      </form>
    </Common>
  )

}

export default CommunityWriting;