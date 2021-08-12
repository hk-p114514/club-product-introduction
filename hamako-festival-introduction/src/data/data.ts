'use strict';
import img0_0 from './images/0_0.jpg';
import img0_1 from './images/0_1.jpg';
import img1_0 from './images/1_0.jpg';
import img1_1 from './images/1_1.jpg';

type Data = {
  id: number;
  name: string;
  images: string[];
  videos: string[];
  text: string;
};

const data: Data[] = [
  {
    id: 0,
    name: 'レッツ剛田',
    images: [img0_0, img0_1],
    videos: [],
    text: `Lorem ipsum dolor sit amet,
    consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui
    officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 1,
    name: 'レディー剛田',
    images: [img1_0, img1_1],
    videos: [],
    text: ``,
  },
];

export { data };
