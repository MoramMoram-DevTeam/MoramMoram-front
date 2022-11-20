import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Common from "./Common";
import styles from "./CommunityList.module.css";
import Tr from "./table/Tr";
import pencil from "../../assets/images/pencil.svg";

const CommunityList = () => {

  const url = 'base_url';
  const [lists, setLists] = useState<Array<any>>([
  //   {
  //     "questionBoardId": 13,
  //     "userId": 2,
  //     "name": "user",
  //     "title": "질문이용",
  //     "note": "이거이거이거 어떻게 하면 되나요?",
  //     "img": null,
  //     "viewCnt": 300,
  //     "likeCnt": 20,
  //     "commentCnt": 0,
  //     "status": "ACTIVE",
  //     "createdAt": "2022-11-17T02:30:36",
  //     "updatedAt": "2022-11-17T02:30:36"
  // },
  // {
  //     "questionBoardId": 1,
  //     "userId": 1,
  //     "name": "홍길동",
  //     "title": "질문있습니다1!",
  //     "note": "질문....질문.....",
  //     "img": null,
  //     "viewCnt": 50,
  //     "likeCnt": 5,
  //     "commentCnt": 0,
  //     "status": "ACTIVE",
  //     "createdAt": "2022-11-17T02:30:36",
  //     "updatedAt": "2022-11-17T02:30:36"
  // }
  ]);

  const getQnaLists = () => {
    axios.get('/questions/list',{
      params: {page: 0}
    })
    .then((res) => {
      setLists(res.data);
    })
    .catch((err) => {
      // if (err.response.status === 404) {
      //   console.log('404 Error')
      // }
    })
  }

  useEffect(() => {
    getQnaLists();
  }, []);

  

  return (
    <Common>
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