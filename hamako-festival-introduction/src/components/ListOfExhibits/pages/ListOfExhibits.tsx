import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Title } from '../../shareComponents/organisms/Title';
import { Exhibits } from '../templates/Exhibits';

// 全ての展示の一覧
const ListOfExhibits: FC = () => {
  const year: number = 2021;
  return (
    <>
      <Helmet>
        <title>{`${year}浜工祭`}</title>
      </Helmet>
      <Title title={`${year}浜工祭`} />
      <Exhibits />
    </>
  );
};
export { ListOfExhibits };
