// 展示品作成者による紹介文及びコメントなど
import { FC } from 'react';

type Props = {
  text: string;
};

const IntroductionText: FC<Props> = (props: Props) => {
  const { text } = props;
  return <p className="IntroductionText">{text}</p>;
};

export { IntroductionText };
