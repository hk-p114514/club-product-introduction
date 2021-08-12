import { FC } from 'react';
import { ListOfExhibits } from '../ListOfExhibits/pages/ListOfExhibits';
import { SlideShow } from '../singleExhibit/templates/SlideShow';
import './debug.css';

const Debug: FC = () => {
  return (
    <>
      <h1>Debug</h1>
      <ListOfExhibits />
    </>
  );
};

export { Debug };
