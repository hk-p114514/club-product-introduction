import { FC } from 'react';

type Props = {
  title: string;
};

// ヘッダのタイトル部分
const Title: FC<Props> = (props: Props) => {
  const { title } = props;
  return <h1>{title}</h1>;
};

export { Title };
