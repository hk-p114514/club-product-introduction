import { FC } from 'react';
import './animationBackground.css';

const AnimationBackground: FC = () => {
  return (
    <>
      <div className="field">
        <div className="item1 shake"></div>
        <div className="item2 shake"></div>
        <div className="item3 shake"></div>
        <div className="item1 shake"></div>
        <div className="item2 shake"></div>
        <div className="item1 shake"></div>
        <div className="item1 shake"></div>
        <div className="item2 shake"></div>
        <div className="item3 shake"></div>
        <div className="item1 shake"></div>
        <div className="item2 shake"></div>
        <div className="item3 shake"></div>
      </div>
    </>
  );
};
export { AnimationBackground };
