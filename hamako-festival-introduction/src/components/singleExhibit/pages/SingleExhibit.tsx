// 個々の展示の紹介ページ
import { FC } from 'react';
import { Introduction } from '../templates/Introduction';
import { SlideShow } from '../templates/SlideShow';
import './SingleExhibit.css';
type Props = {
  name: string;
  text: string;
  images: string[];
};

const SingleExhibit: FC<Props> = (props: Props) => {
  const { name, text, images } = props;
  return (
    <>
      <section className="exhibit">
        <SlideShow images={images} />
        <Introduction name={name} text={text} />
      </section>
    </>
  );
};

export { SingleExhibit };
