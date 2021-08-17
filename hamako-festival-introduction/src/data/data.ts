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
    title: '¥1000',
    images: [img1_0, img1_1],
    videos: [],
    text: testText,
  },
  {
    id: 2,
    name: '浅田澄禅',
    title: 'ひらがなでかいてみよう',
    images: [img0_0, img0_1],
    videos: [],
    text: testText,
  },
  {
    id: 3,
    name: 'English剛田',
    title: 'やMountain',
    images: [img1_0, img1_1],
    videos: [],
    text: testText,
  },
  {
    id: 4,
    name: 'レッツ剛田',
    title: 'アンアンパンパンマンマン',
    images: [img0_0, img0_1],
    videos: [],
    text: testText,
  },
  {
    id: 5,
    name: 'レディー剛田',
    title: '¥1000',
    images: [img1_0, img1_1],
    videos: [],
    text: testText,
  },
  {
    id: 6,
    name: '浅田澄禅',
    title: 'ひらがなでかいてみよう',
    images: [img0_0, img0_1],
    videos: [],
    text: testText,
  },
  {
    id: 7,
    name: 'English剛田',
    title: 'やMountain',
    images: [img1_0, img1_1],
    videos: [],
    text: testText,
  },
  {
    id: 8,
    name: 'レッツ剛田',
    title: 'アンアンパンパンマンマン',
    images: [img0_0, img0_1],
    videos: [],
    text: testText,
  },
  {
    id: 9,
    name: 'レディー剛田',
    title: '¥1000',
    images: [img1_0, img1_1],
    videos: [],
    text: testText,
  },
  {
    id: 10,
    name: '浅田澄禅',
    title: 'ひらがなでかいてみよう',
    images: [img0_0, img0_1],
    videos: [],
    text: testText,
  },
  {
    id: 11,
    name: 'English剛田',
    title: 'やMountain',
    images: [img1_0, img1_1],
    videos: [],
    text: testText,
  },
];

export { data };
