import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerSlick.css";
import banner from "../../../assets/images/banner.svg";
import MarketFrame from "components/fleamarket/MarketFrame";
import { FleaInfo } from "components/fleamarket/FleaMarketList";
import axios from "axios";

const BNSlider = styled(Slider)`
  width: 100%;
`

const FleaCarousel = () => {

  const [FLists, setFLists] = useState<FleaInfo[] | undefined>([]);

  const getTop5FLists = async () => {
    await axios.get('/markets')
    .then((res) => {
      setFLists(res.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getTop5FLists();
  },[])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerPadding: '10px',
    autoplay: true, //자동 넘김
    autoplaySpeed: 5000, //자동 넘김 5초에 1번씩
  };

  return (
    <div>
         <Slider {...settings}>
         { FLists && FLists.map((info, idx) => 
            <MarketFrame info={info} key={idx} />
             )}     
          </Slider>
     
    </div>
  )
}

export default FleaCarousel;