'use strict';
import img1_1 from './images/1_1.jpg';

type Images = {
  id: number;
  images: string[];
};

const imageInfo: Images[] = [
  {
    id: 0,
    images: [img1_1],
  },
];

export { imageInfo };
