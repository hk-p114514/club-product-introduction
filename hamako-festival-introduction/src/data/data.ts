'use strict';
import img0_0 from './images/0_0.png';
import video0_0 from './videos/0_0.mp4';
import img1_0 from './images/1_0.png';
import img1_1 from './images/1_1.png';
import video1_0 from './videos/1_0.mp4';
import img2_1 from './images/2_1.png';
import img2_2 from './images/2_2.png';
import img2_3 from './images/2_3.png';
import img2_4 from './images/2_4.png';
import img2_5 from './images/2_5.png';
import img3_0 from './images/3_0.png';
import img3_1 from './images/3_1.png';
import img3_2 from './images/3_2.png';
import video3_0 from './videos/3_0.mp4';
import img4_0 from './images/4_0.png';
import img4_1 from './images/4_1.png';
import img4_2 from './images/4_2.png';

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
    name: 'ei2031',
    title: 'escape run',
    images: [img0_0],
    videos: [video0_0],
    text: ``,
  },
  {
    id: 1,
    name: 'ei2007',
    title: '未定',
    images: [img1_0, img1_1],
    videos: [video1_0],
    text: ``,
  },
  {
    id: 2,
    name: 'ei2037',
    title: 'しょりぶのアクション',
    images: [img2_1, img2_2, img2_3, img2_4, img2_5],
    videos: [],
    text: ``,
  },
  {
    id: 3,
    name: 'ei2030',
    title: 'シューティングゲーム',
    images: [img3_0, img3_1, img3_2],
    videos: [video3_0],
    text: `文字通りシューティングゲームです。
実はゲームエンジンを使っていません。JavaScript(TypeScript)という言語で開発しています。
運が良ければラスボスの元ネタになった方に会えるかもしれません。`,
  },
  {
    id: 4,
    name: 'R1933',
    title: 'タワーディフェンス',
    images: [img4_0, img4_1, img4_2],
    videos: [],
    text: `我らが偉大な先輩（３年）が制作された作品です。`,
  },
];

export { data };
