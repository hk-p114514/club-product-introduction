// 展示品の作者の名前
import { FC } from 'react';

type Props = {
  name: string;
};

const CreatorName: FC<Props> = (props: Props) => {
  const { name } = props;

  return <h3>{name}</h3>;
};

export { CreatorName };
