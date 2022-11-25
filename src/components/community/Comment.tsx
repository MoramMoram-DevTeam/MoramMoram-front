import axios from "axios";
import React, {useState} from "react";
import { useParams } from "react-router-dom";

import styles from "./CommunityDetail.module.css";

const Comment = ({lists}: any, params:string) => {

  const {questionBoardId} = useParams();

  const [repId, setRepId] = useState<any>();

  const onClickDelete2 = async (e: any) => {
    e.preventDefault();
    await axios.delete(`/questions/replies/${repId}`)
    .then((res) => {
      if(res.data.isSuccess){
        alert(res.data.message);
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const onClickDelete = async () => {

    try{
      const response = await axios.delete(`/questions/replies/${repId}`);
      if(response.data){
        alert('삭제되었습니다.');
        console.log(response.data, 'delete');
        window.location.reload();
        
      }
      
    }
    catch (err) {
      alert(err);
    }
  }
  
  return (
    <div>

       {
        lists &&
        lists.map((item:any, idx: any) => (
            <div className={styles.comment_list} key={idx} onMouseEnter={() => {setRepId(item.questionReplyId)}}>
             
            <div className={styles.comment_user}>{item.replyer}</div>
            <div className={styles.comment_desc}>{item.replyText}</div>
            <div className={styles.comment_time}>{item.updatedAt}</div>
            <div style={{cursor: "pointer"}} onClick={onClickDelete2}>x</div>
          </div>
        ))
          
          
       
       }
      
    </div>
     
  )
}
export default Comment;