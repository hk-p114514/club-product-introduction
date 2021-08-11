import { FC } from 'react';
import { SlideShow } from '../singleExhibit/templates/SlideShow';

const Debug: FC = () => {
  return (
    <>
      <h1>Debug</h1>
      <SlideShow studentNumber={0} />
    </>
  );
};

export { Debug };
