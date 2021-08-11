import { FC } from 'react';

type Props = {
  year: number;
};

// 年号ロゴ
const YearNumberLogo: FC<Props> = (props: Props) => {
  const { year } = props;

  return <p>{year}年浜工祭</p>;
};

export { YearNumberLogo };
