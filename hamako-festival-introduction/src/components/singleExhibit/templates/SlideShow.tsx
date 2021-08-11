// 紹介文横の画像、動画のスライドショー
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import Slider from 'react-slick';
import { imageInfo } from '../../../data/images';
import { SlideShowImage } from '../organisms/SlideShowImage';

const settings = {
  // 操作系
  dots: true,
  arrows: true,
  // 自動再生
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  // 繰り返し
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type Props = {
  studentNumber: number;
};

const SlideShow: FC<Props> = (props: Props) => {
  const { studentNumber } = props;

  return (
    <>
      <Slider {...settings}>
        {imageInfo[studentNumber].images.map((image, i) => {
          return (
            <div key={i}>
              <img src={image} alt="image" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export { SlideShow };
