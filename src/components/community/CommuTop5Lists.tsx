import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pic1 from "../../assets/images/rank/1.svg";
import pic2 from "../../assets/images/rank/2.svg";
import pic3 from "../../assets/images/rank/3.svg";
import pic4 from "../../assets/images/rank/4.svg";
import pic5 from "../../assets/images/rank/5.svg";

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
  text-align: left;
`

const Rank = styled.img`
  margin: 0 10px 0 5px;
  vertical-align: middle;
`;

const CommuTop5Lists = ({url}:any) => {
  const navigate = useNavigate();
  const [top5, setTop5] = useState<any>();
  const [currentQId, setCurrentQId] = useState<any>();
  const arr = [pic1, pic2, pic3, pic4, pic5];

  const getQnaTop5 = async () => {
    await axios.get('/questions/top-posts')
      .then((res) => {
             
        setTop5(res.data);
        console.log('top5', top5);   
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getInfoTop5 = async () => {
    await axios.get('/tips/top-posts')
      .then((res) => {        
        setTop5(res.data.result);
        console.log('tip top5', res.data.result);   
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onClickTr = () => {
    navigate(`/community/${url}/${currentQId}`,{
      state: {
        url: url,
        questionBoardId: currentQId
      }
    })
  }

  useEffect(() => {
    url === "questions" ? getQnaTop5() : getInfoTop5();

  }, []);

  return (

    url === "questions" ?
    
      top5 && top5.map((item: { questionBoardId: number; title: string; createdAt: string; likeCnt: number; viewCnt: number; }, idx:number) => (
        // <Top5Td key={item.questionBoardId} item={item} />
        <tr style={{backgroundColor: "#F6F6F6"}} onClick={onClickTr} key={item.questionBoardId} onMouseEnter={() => setCurrentQId(item.questionBoardId)}>
        <TdTitle><Rank src={arr[idx]} />{item.title}</TdTitle>
        <TopTd className=''> { item.createdAt && item.createdAt.split(' ')[0]}</TopTd>
        <TopTd className=''>{item.likeCnt}</TopTd>
        <TopTd className=''>{item.viewCnt}</TopTd>
      </tr>
      ))
      :
      top5 && top5.map((item: { tipBoardId: number; title: string; boardDate: string; likeCnt: number; viewCnt: number; }, idx:number) => (
        // <Top5Td key={item.questionBoardId} item={item} />
        <tr style={{backgroundColor: "#F6F6F6"}} onClick={onClickTr} key={item.tipBoardId} onMouseEnter={() => setCurrentQId(item.tipBoardId)}>
        <TdTitle><Rank src={arr[idx]} />{item.title}</TdTitle>
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