// ヘッダー部分
import { Title } from '../organisms/Title';
import { FC } from 'react';
import { YearNumberLogo } from '../molecules/YearNumberLogo';

type Props = {
  title: string;
  year: number;
};

const Header: FC<Props> = (props: Props) => {
  const { title, year } = props;

  return (
    <section>
      <Title title={title} />
      <YearNumberLogo year={year} />
    </section>
  );
};

export { Header };
