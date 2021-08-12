import { FC } from 'react';
import { BackPage } from '../organisms/BackPage';
import { GoHome } from '../organisms/GoHome';
import { NextPage } from '../organisms/NextPage';
import './pageController.css';

const PageController: FC = () => (
  <>
    <div className="page-controller">
      <BackPage />
      <NextPage />
      <GoHome />
    </div>
  </>
);

export { PageController };
