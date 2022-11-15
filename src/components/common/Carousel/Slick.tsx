import React, {useMemo} from "react";
import Slider, {Settings} from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SlideWrapper = styled.section`
  position: relative;
`;

const StyledSlider = styled(Slider)`
width: 100%;
height: auto;


img{
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.info {
  cursor: pointer;
  width: 340px;
  height: 150px;
  font-size: 1.125rem;
  font-family: 'SUIT-Regular';
}

.title {
  font-size: 1.25rem;
  font-family: 'SUIT-SemiBold';
  
}

.desc {
  line-height: 28px;
  margin: 15px 0;
}

.date {
  color: #BABABA;
}
`

interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}


const Slick = ({
  children,
  className,
  autoplay = true,
  speed = 300,
  loop = true,
}: sliderProps) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      infinite: loop,
      speed: speed,
      slidesToShow: 3,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
    }),
    [autoplay, loop, speed],
  );
  return (
    <SlideWrapper className={className}>
      <StyledSlider {...settings}>{children}</StyledSlider>
    </SlideWrapper>
  );
}

export default Slick;