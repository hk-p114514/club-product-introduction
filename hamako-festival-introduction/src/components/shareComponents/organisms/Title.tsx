import { FC } from 'react';

type Props = {
  title: string;
};

// ヘッダのタイトル部分
const Title: FC<Props> = (props: Props) => {
  const { title } = props;
  return <h2>{title}</h2>;
};

export { Title };
