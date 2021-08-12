// 個々の展示の紹介ページ
import { FC } from 'react';
import { Introduction } from '../templates/Introduction';
import { SlideShow } from '../templates/SlideShow';
import './SingleExhibit.css';
type Props = {
  studentNumber: number;
  name: string;
  text: string;
};

const SingleExhibit: FC<Props> = (props: Props) => {
  const { studentNumber, name, text } = props;
  return (
    <>
      <section className="exhibit">
        <SlideShow studentNumber={studentNumber} />
        <Introduction name={name} text={text} />
      </section>
    </>
  );
};

export { SingleExhibit };
