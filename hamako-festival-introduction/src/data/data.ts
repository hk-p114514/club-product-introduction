'use strict';
import sampleImg from './images/sample.png';
import sampleVideo from './videos/sample.mp4';

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

const testImage = [sampleImg, sampleImg, sampleImg];
const testVideo = [sampleVideo];

const data: Data[] = [
  {
    id: 0,
    name: 'レッツ剛田',
    title: 'アンアンパンパンマンマン',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 1,
    name: 'レディー剛田',
    title: '¥1000',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 2,
    name: '浅田澄禅',
    title: 'ひらがなでかいてみよう',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 3,
    name: 'English剛田',
    title: 'やMountain',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 4,
    name: 'レッツ剛田',
    title: 'アンアンパンパンマンマン',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 5,
    name: 'レディー剛田',
    title: '¥1000',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 6,
    name: '浅田澄禅',
    title: 'ひらがなでかいてみよう',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 7,
    name: 'English剛田',
    title: 'やMountain',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 8,
    name: 'レッツ剛田',
    title: 'アンアンパンパンマンマン',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 9,
    name: 'レディー剛田',
    title: '¥1000',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 10,
    name: '浅田澄禅',
    title: 'ひらがなでかいてみよう',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
  {
    id: 11,
    name: 'English剛田',
    title: 'やMountain',
    images: testImage,
    videos: testVideo,
    text: testText,
  },
];

export { data };
