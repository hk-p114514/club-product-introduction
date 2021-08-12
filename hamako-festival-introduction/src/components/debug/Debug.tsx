import { FC } from 'react';
import { SlideShow } from '../singleExhibit/templates/SlideShow';
import './debug.css';

const Debug: FC = () => {
  return (
    <>
      <h1>Debug</h1>
      <section className="slide">
        <SlideShow studentNumber={1} />
      </section>
    </>
  );
};

export { Debug };
