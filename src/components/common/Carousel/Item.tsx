import React from 'react';
import styled from 'styled-components'
import Slick from './Slick';

import seller1 from "../../../assets/images/review/seller1.svg";
import seller2 from "../../../assets/images/review/seller2.svg";
import seller3 from "../../../assets/images/review/seller3.svg";
import seller4 from "../../../assets/images/review/seller4.svg";

import office1 from "../../../assets/images/review/office/office1.svg";
import office2 from "../../../assets/images/review/office/office2.svg";
import office3 from "../../../assets/images/review/office/office3.svg";
import office4 from "../../../assets/images/review/office/office4.svg";

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

const selleritems: itemsProps[] = [
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

const officeitems: itemsProps[] = [
  {
    item: office1,
    name: '주최후기01',
    title: '넓은 잔디밭에서 추억을 팔아보세요',
    desc: '잔디밭 가운데를 고객들의 휴식공간으로 구성해보았습니다. 많은 분들이 찾아주셨구요, 특히 음식판매 하신 분들이 좋은 경험 많이 하셨을거라',
    date: '2022.11.15'

  },
  {
    item: office2,
    name: '주최후기02',
    title: '푸른 하늘과 푸른 플리마켓',
    desc: '한강 근처에 위치한 플리마켓입니다. 남녀노소 많은 분들이 찾아주시는 공간이에요. 특히 노을진 시간대에 많은 사람들이 방문해주신답니다.',
    date: '2022.11.15'
  },
  {
    item: office3,
    name: '주최후기03',
    title: '플리마켓이 처음이라면 모두 여기로!',
    desc: '공예관련 전공을 하며 대학생 때부터 플리마켓에 자주 나갔었어요. 그 때 겪었던 어려움을 기억하기 때문에 저희 마켓에 참여해주신 셀러분들에게',
    date: '2022.11.15'
  },
  {
    item: office4,
    name: '주최후기04',
    title: '바다를 바라보며 행복을',
    desc: '제주도 협재해변 근처에 위치한 플리마켓이에요. 관광객들이 많이 다니는 편이라 유동인구가 매우 많고, 인근 주민 분들도 즐겨 찾는 장소랍니다.',
    date: '2022.11.15'

  },
]

function Item({ title }: any) {
  if (title === "셀러 후기") {
    return (
      <div>
        <Title>{title}</Title>
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
  } else if (title === "주최 후기") {
    return (
      <div>
        <Title>{title}</Title>
          <Slick>
          {officeitems.map((item, index) => (
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
}

export default Item;