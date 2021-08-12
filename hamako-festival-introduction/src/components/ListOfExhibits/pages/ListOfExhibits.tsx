import { FC } from 'react';
import { Title } from '../../shareComponents/organisms/Title';
import { Routing } from '../organisms/Routing';
import { Exhibits } from '../templates/Exhibits';

// 全ての展示の一覧
const ListOfExhibits: FC = () => {
  return (
    <>
      <Title title="2021浜工祭" />
      <Exhibits />
      <Routing />
    </>
  );
};
export { ListOfExhibits };
