import React from "react";
import hot1 from "../../assets/images/main/hot1.svg";
import hot2 from "../../assets/images/main/hot2.svg";
import dirbtn from "../../assets/images/main/hot2.svg";
import styled from "styled-components";

const HFrame = styled.div`
  width: 552px;
  height: 261px;
  border-radius: 10px;
  border: 1px solid #BABABA;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HImg = styled.img`
  width: 235px;
  height: 235px;
  border-radius: 10px;
`

const HTitle = styled.div`
  font-family: 'SUIT-SemiBold';
  font-size: 28px;
  margin-bottom: 10px;

`
const HPlace = styled.div`
  font-family: 'SUIT-Medium';
  font-size: 1.125rem;
  margin-bottom: 20px;
`

const HDate = styled.div`
  font-family: 'SUIT-SemiBold';
  font-size: 1.125rem;
  margin-bottom: 10px;
`
const HTag = styled.div`
  font-family: 'SUIT-Medium';
  font-size: 0.9rem;
  margin-bottom: 12px;
`


const HotFrame = () => {
  return (
    <HFrame>
      <div><HImg src={hot1} alt="hp1"/></div>
      <div>
        <div>서울특별시 광진구 자양동</div>

        <HTitle>자양사랑 플리마켓</HTitle>
        <HDate>22.11.26 - 22.12.31</HDate>
        <HTag>#쥬얼리 #공예품 #여성의류</HTag>

        <div><img src={dirbtn}/></div>
      </div>
    </HFrame>
  )
}

export default HotFrame;