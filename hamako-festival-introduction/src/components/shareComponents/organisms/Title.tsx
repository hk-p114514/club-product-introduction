import { FC } from 'react';
import './title.css';

type Props = {
  title: string;
};

// ヘッダのタイトル部分
const Title: FC<Props> = (props: Props) => {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export { Title };
