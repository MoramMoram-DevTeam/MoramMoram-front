import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import marketPicture from "../../assets/images/marketPicture.svg";
import { FleaInfo } from "./FleaMarketList";

type InfoProps = {
  info: FleaInfo
}
export const Frame = styled.div`
  width: 264px;
  height: 330px;
  background-color: #FFFFFF;
  border: 1px solid #BABABA;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  &:hover{
    border: 1px solid #FFB600;
  }
  cursor: pointer;
`;

export const MarketImg = styled.img.attrs({
  src: `${marketPicture}`,
})`
  width: 234px;
  height: 162px;
`;

export const MarketTitle = styled.div`
  font-family: 'SUIT-Medium';
  font-size: 1.438rem;
  margin-top: 20px;
`

export const MarketAddress = styled.div`
  font-family: 'SUIT-Regular';
  font-size: 1.125rem;
  color: #BABABA;
  margin: 15px 0;
`

export const Deadline = styled.div`
  width: 232px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #FFB600;
  color: #FFB600;
  font-family: 'SUIT-Regular';
  font-size: 1.125rem;
  border-radius: 20px;
`;


const MarketFrame = ({info}:InfoProps) => {

  const dateArr:Array<string> = info.end.split('-');
  const navigate = useNavigate();

  const onClickMarket = () => {
    window.scrollTo(0, 0);
    navigate(`/fleamarket/${info.id}`, {
      state: {
        id: info.id
      }
    });
    
  }

  return (
    <Frame onClick={onClickMarket}>
      <MarketImg />
      <MarketTitle>{info.marketName}</MarketTitle>
      <MarketAddress>{info.place}</MarketAddress>
      <Deadline>{dateArr[1]}/{dateArr[2]}일 마감</Deadline>
    </Frame>
  )
}

export default MarketFrame;