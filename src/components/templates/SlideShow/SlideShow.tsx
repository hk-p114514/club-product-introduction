import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideShow.css";
import { test2, test3, video1, video2 } from "../../../images/imagePath";
import Slider from "react-slick";

const settings = {
  // 操作系
  dots: true,
  arrows: true,
  // 自動再生
  autoplay: true,
  pauseOnHover: true,
  // 繰り返し
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlideShow: FC = () => {
  return (
    <>
      <Slider {...settings}>
        <video autoPlay muted loop playsInline controls>
          <source src={video1}></source>
        </video>
        <video autoPlay muted loop playsInline controls>
          <source src={video2}></source>
        </video>
        <div>
          <img src={test2} alt="" />
        </div>
        <div>
          <img src={test3} alt="" />
        </div>
      </Slider>
    </>
  );
};

export { SlideShow };
