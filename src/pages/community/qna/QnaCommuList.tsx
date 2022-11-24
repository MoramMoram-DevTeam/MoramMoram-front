import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Common from "../../../components/community/Common";
import styles from "../../../components/community/CommunityList.module.css";
import pencil from "../../../assets/images/pencil.svg";
import axios from "axios";
import CommunityList from "components/community/CommunityList";

const QnaCommuList = () => {
  const [lists, setLists] = useState<Array<any>>([]);

  const getQnaLists = async () => {
    await axios.get('/questions/list',{
      params: {page: 0}
    })
    .then((res) => {
      setLists(res.data);
      console.log('qna lists', lists);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getQnaLists();
  }, []);

  return (
    <Common title="질문게시판">

      <CommunityList lists={lists} url="questions" />

      <div className={styles.under_btn}>
        <Link to="/community/questions/write" className={styles.write_btn}>
          <img src={pencil} alt="pencil" />
          <span >새글쓰기</span>
        </Link>
      </div>
        
      
    </Common>
  )

}

export default QnaCommuList;