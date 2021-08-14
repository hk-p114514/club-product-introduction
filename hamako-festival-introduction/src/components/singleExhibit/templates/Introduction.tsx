// 展示の紹介と作成者氏名
import { FC } from 'react';
import { CreatorName } from '../organisms/CreatorName';
import { IntroductionText } from '../organisms/IntroductionText';

type Props = {
  name: string;
  text: string;
};

const Introduction: FC<Props> = (props: Props) => {
  const { name, text } = props;
  return (
    <section className="introduction-container">
      <CreatorName name={name} />
      <IntroductionText text={text} />
    </section>
  );
};

export { Introduction };
