import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Top5Td from "./Top5Td";

const TopTd = styled.td`

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

const CommuTop5Lists = ({url}:any) => {
  const navigate = useNavigate();
  const [top5, setTop5] = useState<any>();

  const getQnaTop5 = async () => {
    await axios.get('/questions/top-posts')
      .then((res) => {        
        setTop5(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getInfoTop5 = async () => {
    await axios.get('/tips/top-posts')
      .then((res) => {        
        setTop5(res.data.lists);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    console.log(url);
    url === "questions" ? getQnaTop5() : getInfoTop5();

  }, [])

  const onClickTr =() => {
    alert('hahaha');
  }

  return (

    url === "questions" ?
    
      top5 && top5.map((item: { questionBoardId: number; title: string; boardDate: string; likeCnt: number; viewCnt: number; }) => (
        // <Top5Td key={item.questionBoardId} item={item} />
        <tr onClick={onClickTr} key={item.questionBoardId}>
        <TdTitle>{item.title}</TdTitle>
        <TopTd className=''>{item.boardDate}</TopTd>
        <TopTd className=''>{item.likeCnt}</TopTd>
        <TopTd className=''>{item.viewCnt}</TopTd>
      </tr>
      ))
      :
      top5 && top5.map((item: { tipBoardId: number; title: string; boardDate: string; likeCnt: number; viewCnt: number; }) => (
        // <Top5Td key={item.questionBoardId} item={item} />
        <tr onClick={onClickTr} key={item.tipBoardId}>
        <TdTitle>{item.title}</TdTitle>
        <TopTd className=''>{item.boardDate}</TopTd>
        <TopTd className=''>{item.likeCnt}</TopTd>
        <TopTd className=''>{item.viewCnt}</TopTd>
      </tr>
      ))
      

      /* <tr >
        <TdTitle>안녕하세요</TdTitle>
        <td className=''>2022.11.15</td>
        <td className=''>50</td>
        <td className=''>2</td>
      </tr>
      <tr >
        <TdTitle>안녕하세요</TdTitle>
        <td className=''>2022.11.15</td>
        <td className=''>50</td>
        <td className=''>2</td>
      </tr>
      <tr >
        <TdTitle>안녕하세요</TdTitle>
        <td className=''>2022.11.15</td>
        <td className=''>50</td>
        <td className=''>2</td>
      </tr>
      <tr >
        <TdTitle>안녕하세요</TdTitle>
        <td className=''>2022.11.15</td>
        <td className=''>50</td>
        <td className=''>2</td>
      </tr>
      <tr >
        <TdTitle>안녕하세요</TdTitle>
        <td className=''>2022.11.15</td>
        <td className=''>50</td>
        <td className=''>2</td>
      </tr> */


    // :
    // top5 && top5.map((item: { tipBoardId: number; }) => (
    //   <Top5Td key={item.tipBoardId} item={item} url={url} />
    // ))

  )
}

export default CommuTop5Lists;