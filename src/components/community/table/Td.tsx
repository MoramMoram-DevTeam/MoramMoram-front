import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Td.module.css";



const Td = ({item, url}:any) => {

  const navigate = useNavigate();

  const onClickTr = () => {
    item && url === "questions" 
    ?
    navigate(`/community/${url}/${item.questionBoardId}`,{
      state: {
        url: url,
        questionBoardId: item.questionBoardId
      }
    })
    :
    navigate(`/community/${url}/${item.tipBoardId}`,{
      state: {
        url: url,
        tipBoardId: item.tipBoardId
      }
    })
    ;
  }
    return (
        <>
        <tr onClick={onClickTr}>
            <td className={styles.td_title}>{item.title}</td>
            <td className=''>{item.boardDate}</td>
            <td className=''>{item.likeCnt}</td>
            <td className=''>{item.viewCnt}</td>     
        </tr>
        </>
    )
};

export default Td;