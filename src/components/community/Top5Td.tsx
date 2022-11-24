import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const TopTd = styled.td`
  border: 2px solid red;
  cursor: pointer;
  padding: 20px 10px;
  border-top: 1px solid #EEE;
  font-family: 'SUIT-Regular';
  font-size: 1.125rem;
  color: #222222;
  text-align: center;
`;

const TdTitle = styled.td`
  font-family: 'SUIT-SemiBold';
  font-size: 1.125rem;
`

const Top5Td = (item:any, url:string) => {

  const navigate = useNavigate();
  const onClickTr = () => {
    navigate(`/community/questions/${item.questionBoardId}`,{
      state: {
        url: url,
        questionBoardId: item.questionBoardId
      }
    })}
    
  return (

      <tr onClick={onClickTr}>
        <TdTitle>{item.title}</TdTitle>
        <TopTd className=''>{item.boardDate}</TopTd>
        <TopTd className=''>{item.likeCnt}</TopTd>
        <TopTd className=''>{item.viewCnt}</TopTd>
      </tr>

  )
}

export default Top5Td;