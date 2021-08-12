// 個々の展示の紹介ページ
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Introduction } from '../templates/Introduction';
import { SlideShow } from '../templates/SlideShow';
import './SingleExhibit.css';
type Props = {
  name: string;
  text: string;
  title: string;
  images: string[];
};

const SingleExhibit: FC<Props> = (props: Props) => {
  const { name, text, images, title } = props;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="container">
        <SlideShow images={images} />
        <Introduction name={name} text={text} />
      </section>
    </>
  );
};

export { SingleExhibit };
