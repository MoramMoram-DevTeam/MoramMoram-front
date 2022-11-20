import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Common from "./Common";
import styles from "./CommunityList.module.css";
import Tr from "./table/Tr";
import pencil from "../../assets/images/pencil.svg";
import axios from "axios";

const CommunityList = () => {
  const [lists, setLists] = useState<Array<any>>([]);

  const getQnaLists = async () => {
    await axios.get('/questions/list',{
      params: {page: 0}
    })
    .then((res) => {
      setLists(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getQnaLists();
  }, []);

  return (
    <Common title="질문게시판">
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
        <Tr lists={lists}/>
      </table>
      </div>

      <div className={styles.under_btn}>
        <Link to="/community-write" className={styles.write_btn}>
          <img src={pencil} alt="pencil" />
          <span >새글쓰기</span>
        </Link>
      </div>
        
      
    </Common>
  )
}

export default CommunityList;