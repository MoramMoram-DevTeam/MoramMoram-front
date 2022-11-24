import React, {useState} from "react";
import styles from "./CommunityList.module.css";
import Tr from "./table/Tr";

const CommunityList = (lists: any, url:string) => {
  // const [lists, setLists] = useState<Array<any>>(comu);


  return (
    <div>
      <div className={styles.wrap}>
      <table>
        <thead>
          <tr>
            <th className={styles.th_title}>제목</th>
            <th className={styles.th_date}>작성일</th>
            <th className={styles.th_like}>좋아요</th>
            <th>조회수</th>
          </tr>
        </thead>
        
        {lists && <Tr lists={lists} url={url}/> }
      </table>
      </div>      
    </div>
  )
}

export default CommunityList;