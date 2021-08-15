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

const testText = `
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
    作品説明です作品説明です作品説明です作品説明です
`;
const data: Data[] = [
  {
    id: 0,
    name: 'レッツ剛田',
    title: 'アンアンパンパンマンマン',
    images: [img0_0, img0_1],
    videos: [],
    text: testText,
  },
  {
    id: 1,
    name: 'レディー剛田',
    title: 'Perfect-area complete!',
    images: [img1_0, img1_1],
    videos: [],
    text: testText,
  },
  {
    id: 2,
    name: '浅田澄禅',
    title: 'ひらがなでかいてみよう',
    images: [
      'https://www.pakutaso.com/shared/img/thumb/medama458A9913_TP_V4.jpg',
      'https://www.pakutaso.com/shared/img/thumb/medama458A9929_TP_V4.jpg',
      'https://www.pakutaso.com/shared/img/thumb/medam458A9934_TP_V4.jpg',
      'https://www.pakutaso.com/shared/img/thumb/medama458A0019_TP_V4.jpg',
    ],
    videos: [],
    text: testText,
  },
];

export { data };
