// 展示品の作者の名前
import { FC } from 'react';
import './creatorName.css';

type Props = {
  name: string;
};

const CreatorName: FC<Props> = (props: Props) => {
  const { name } = props;

  return (
    <h3 className="creatorName">
      <span>製作者 : </span>
      {name}
    </h3>
  );
};

export { CreatorName };
