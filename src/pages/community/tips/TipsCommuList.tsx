import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Common from "../../../components/community/Common";
import styles from "../../../components/community/CommunityList.module.css";
import pencil from "../../../assets/images/pencil.svg";
import axios from "axios";
import CommunityList from "components/community/CommunityList";
import CommuTop5Lists from "components/community/CommuTop5Lists";
import Td from "components/community/table/Td";

const TipsCommuList = () => {
  const [lists, setLists] = useState<Array<any>>([]);

  const getTipsLists = async () => {
    await axios.get('/tips/list?page=0')
    .then((res) => {
      setLists(res.data.result);
      console.log('tips lists', lists);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getTipsLists();
    console.log(lists);
  }, []);

  return (
    <Common title="정보게시판">
      
    <CommunityList lists={lists} url="tips" />
{/* <div>
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
  <tbody>
   {
    lists ?

    lists.lists.map((item: { tipBoardId: number; }) =>
                    (
                     <>
                        <CommuTop5Lists tipBoardId={item.tipBoardId}/>
                        <Td key={item.tipBoardId} item={item} url="tips"  />
                      </>
                    )
                )
    :
    <tr>작성된 글이 없습니다.</tr>
                    }
                

    </tbody>
      </table>
      </div>      
    </div> */}

      <div className={styles.under_btn}>
        <Link to="/community/tips/write" className={styles.write_btn}>
          <img src={pencil} alt="pencil" />
          <span >새글쓰기</span>
        </Link>
      </div>
      {/* </div>  */}
        
    </Common>
  )

}

export default TipsCommuList;