// 個々の展示の紹介ページ
import { Grid } from '@material-ui/core';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Introduction } from '../templates/Introduction';
import { SlideShow } from '../templates/SlideShow';
import './SingleExhibit.css';
type Props = {
  name: string;
  text: string;
  title: string;
  images: string[];
};

const SingleExhibit: FC<Props> = (props: Props) => {
  const { name, text, images, title } = props;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="container">
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <SlideShow images={images} />
          </Grid>
          <Grid item xs={5}>
            <Introduction name={name} text={text} />
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export { SingleExhibit };
