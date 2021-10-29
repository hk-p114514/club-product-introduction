/* 展示の紹介と作成者氏名*/
import { Paper } from '@material-ui/core';
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
    <Paper elevation={3} className="introduction-container">
      <CreatorName name={name} />
      <IntroductionText text={text} />
    </Paper>
  );
};

export { Introduction };
