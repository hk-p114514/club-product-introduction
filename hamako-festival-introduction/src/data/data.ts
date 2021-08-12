'use strict';
import img0_0 from './images/0_0.jpg';
import img0_1 from './images/0_1.jpg';
import img1_0 from './images/1_0.jpg';
import img1_1 from './images/1_1.jpg';

type Data = {
  id: number;
  name: string;
  title: string;
  images: string[];
  videos: string[];
  text: string;
};

const data: Data[] = [
  {
    id: 0,
    name: 'レッツ剛田',
    title: 'アンアンパンパンマンマン',
    images: [img0_0, img0_1],
    videos: [],
    text: `作品説明です作品説明です
    作品説明です作品説明です
    作品説明です作品説明です
    作品説明です作品説明です作品説明です
    作品説明です作品説明です
    作品説明です作品説明です
    作品説明です`,
  },
  {
    id: 1,
    name: 'レディー剛田',
    title: 'Perfect-area complete!',
    images: [img1_0, img1_1],
    videos: [],
    text: `作品説明です作品説明です
    作品説明です作品説明です
    作品説明です作品説明です
    作品説明です作品説明です作品説明です
    作品説明です作品説明です
    作品説明です作品説明です
    作品説明です`,
  },
];

export { data };
