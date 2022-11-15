import React from 'react';
import styled from 'styled-components'
import Slick from './Slick';

import seller1 from "../../../assets/images/review/seller1.svg";
import seller2 from "../../../assets/images/review/seller2.svg";
import seller3 from "../../../assets/images/review/seller3.svg";
import seller4 from "../../../assets/images/review/seller4.svg";

interface itemsProps {
  item: string,
  name: string,
  title: string,
  desc: string,
  date: string
}

const SliderItem = styled.div`
  width: 100%;
  height: 370px;
`;

const Title = styled.div`

  font-family: 'SUIT-SemiBold';
  font-size: 1.375rem;
  color: #00084A;
  margin-bottom: 20px; 
  margin-top: 40px;
`

const selleritems:itemsProps[] = [
  {
    item: seller1,
    name: '셀러후기01',
    title: '플리마켓이 처음인 분들 주목!',
    desc: '모람모람을 통해 처음으로 플리마켓을 열어보게 되었어요. 주최측 안내자 분이 굉장히 친절하셔서 처음인데도 불구하고 성공적인 결과를 거두게',
    date: '2022.11.15'

  },
  {
    item: seller2,
    name: '셀러후기02',
    title: '물건과 내 몸만 필요한 플리마켓이 있다?',
    desc: '통일된 가판대를 준비해주셨기 때문에 다른 플리마켓보다 준비해야할 부분이 적었어요. 주변 인프라도 좋아서 특히 의류 판매하시는 분들에게',
    date: '2022.11.15'
  },
  {
    item: seller3,
    name: '셀러후기03',
    title: '커플템이 잘팔리는 공간',
    desc: '주변도 너무 예뻐서 커플 분들이 많이 오시더라 구용! 키링 시리즈가 특히 많이 팔려서 저도 너무 행복했어요 ㅎㅎ',
    date: '2022.11.15'
  },   
  {
    item: seller4,
    name: '셀러후기04',
    title: '주민분들이 친절했던 자양동',
    desc: '자양 주민분들이 제품 칭찬도 많이 해주시고 주변 분들에게 홍보도 많이 해주신 덕분에 완판!! 스트레스 많이 받으시는 분들은 이곳 한번 와보세요',
    date: '2022.11.15'

  }, 
]

const officeitems:itemsProps[] = [
  {
    item: seller1,
    name: '셀러후기01',
    title: '플리마켓이 처음인 분들 주목!',
    desc: '모람모람을 통해 처음으로 플리마켓을 열어보게 되었어요. 주최측 안내자 분이 굉장히 친절하셔서 처음인데도 불구하고 성공적인 결과를 거두게',
    date: '2022.11.15'

  },
  {
    item: seller2,
    name: '셀러후기02',
    title: '물건과 내 몸만 필요한 플리마켓이 있다?',
    desc: '통일된 가판대를 준비해주셨기 때문에 다른 플리마켓보다 준비해야할 부분이 적었어요. 주변 인프라도 좋아서 특히 의류 판매하시는 분들에게',
    date: '2022.11.15'
  },
  {
    item: seller3,
    name: '셀러후기03',
    title: '커플템이 잘팔리는 공간',
    desc: '주변도 너무 예뻐서 커플 분들이 많이 오시더라 구용! 키링 시리즈가 특히 많이 팔려서 저도 너무 행복했어요 ㅎㅎ',
    date: '2022.11.15'
  },   
  {
    item: seller4,
    name: '셀러후기04',
    title: '주민분들이 친절했던 자양동',
    desc: '자양 주민분들이 제품 칭찬도 많이 해주시고 주변 분들에게 홍보도 많이 해주신 덕분에 완판!! 스트레스 많이 받으시는 분들은 이곳 한번 와보세요',
    date: '2022.11.15'

  }, 
]

function Item() {
  return (
    <div>
      <Title>셀러 후기</Title>
      <Slick>
        {selleritems.map((item, index) => (
          <SliderItem key={index}>
            <img src={item.item} alt={item.name} />
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
              <div className="date">{item.date}</div>
            </div>
            
          </SliderItem>
        ))}
      </Slick>
    </div>
  );
}

export default Item;