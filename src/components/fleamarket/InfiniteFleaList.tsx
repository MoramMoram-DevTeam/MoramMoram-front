import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { FleaInfo } from "./FleaMarketList";
import styled from "styled-components";
import { Frame, MarketImg, MarketTitle, MarketAddress, Deadline } from "./MarketFrame";
import { useNavigate } from "react-router-dom";

const InfiFrame = styled.div`
  width: 1128px;
  margin: 0 auto;
  margin-bottom: 5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 23px;
`;

const InfiniteFleaList = () => {
  const navigate = useNavigate();
  const [infoArr, setInfoArr] = useState<FleaInfo[] | undefined>([]);

  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);

  const getTotalLists = async () => {
   
    await axios.get('/markets')
      .then((res) => {
        setInfoArr(res.data[1]);
      }).catch((err) => {
        console.log(err);
      })
    }
    
  

  useEffect(() => {
    getTotalLists();
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [infoArr])

  // IntersectionObserver 설정
  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { // 관찰하고 있는 entry가 화면에 보여지는 경우
        io.unobserve(entry.target); // entry 관찰 해제
        getTotalLists(); // 데이터 가져오기
      }
    })
  }

  return (
    <InfiFrame>
      {infoArr && infoArr.map((info, idx) => {
        const dateArr: Array<string> = info.end.split('-');
        if (infoArr.length - 2 === idx) {
          return (

            <Frame ref={boxRef} key={idx} onClick={() => {
              navigate(`/fleamarket/${info.id}`, {
                state: {
                  id: info.id
                }
              })}}>
              <MarketImg />
              <MarketTitle>{info.marketName}</MarketTitle>
              <MarketAddress>{info.place}</MarketAddress>
              <Deadline>{dateArr[1]}/{dateArr[2]}일 마감</Deadline>
            </Frame>

          )
        } else {
          return (
            <Frame key={idx} onClick={() => {
              navigate(`/fleamarket/${info.id}`, {
                state: {
                  id: info.id
                }
              })}}>
              <MarketImg />
              <MarketTitle>{info.marketName}</MarketTitle>
              <MarketAddress>{info.place}</MarketAddress>
              <Deadline>{dateArr[1]}/{dateArr[2]}일 마감</Deadline>
            </Frame>

          )
        }

      })}
    </InfiFrame>
  )
}

export default InfiniteFleaList;