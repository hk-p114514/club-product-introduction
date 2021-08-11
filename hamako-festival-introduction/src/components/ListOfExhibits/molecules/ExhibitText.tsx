// 一つの展示の紹介リンクの紹介文

import { FC } from 'react';

type Props = {
  text: string;
};

const ExhibitText: FC<Props> = (props: Props) => {
  const { text } = props;

  return <p>{text}</p>;
};

export { ExhibitText };
