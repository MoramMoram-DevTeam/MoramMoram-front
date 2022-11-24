import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerSlick.css";
import banner from "../../../assets/images/main/banner.svg";

const BNSlider = styled(Slider)`
  width: 100%;
`

const BannerCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20px',
    autoplay: true, //자동 넘김
    autoplaySpeed: 5000, //자동 넘김 5초에 1번씩
    appendDots: (dots: boolean) => (
      <div
        style={{
          width: '100%',
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom'
  };

  return (
    <div>
         <BNSlider {...settings}>
              <img src={banner} alt="banner"/> 
              <img src={banner} alt="banner"/> 
              <img src={banner} alt="banner"/> 
              <img src={banner} alt="banner"/> 


          </BNSlider>
     
    </div>
  )
}

export default BannerCarousel;