// 個々の展示の紹介ページ
import { FC } from 'react';
import { Introduction } from '../templates/Introduction';
import { SlideShow } from '../templates/SlideShow';
type Props = {
  studentNumber: number;
  name: string;
  text: string;
};

const SingleExhibit: FC<Props> = (props: Props) => {
  const { studentNumber, name, text } = props;
  return (
    <>
      <SlideShow studentNumber={studentNumber} />
      <Introduction name={name} text={text} />
    </>
  );
};

export { SingleExhibit };
