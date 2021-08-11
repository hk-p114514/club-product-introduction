import { FC } from 'react';

type Props = {
  image: string;
};

const SlideShowImage: FC<Props> = (props: Props) => {
  const { image } = props;
  return <img src={image} alt={image.toString()} />;
};

export { SlideShowImage };
