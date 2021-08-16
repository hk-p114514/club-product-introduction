import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../../data/data';

const useStyle = makeStyles(() =>
  createStyles({
    contents: {},
    container: {
      width: '95%',
      margin: '0 auto',
      marginTop: '1%',
    },

    simpleLink: {
      transition: '0.5s',
      opacity: '0.85',
      textDecoration: 'none',
      '&:hover': {
        opacity: '1',
      },
    },

    exhibitLinkButton: {
      padding: 0,
      overflow: 'hidden',
    },

    card: {},

    cardTitle: {
      fontSize: '100%',
      fontWeight: 'bold',
    },

    cardImage: {
      margin: '0 auto',
    },
  })
);

// 展示数分の紹介リンク
const Exhibits: FC = () => {
  const classes = useStyle();
  return (
    <section className={classes.contents}>
      <div className={classes.container}>
        <Grid container className="exhibits" spacing={3}>
          {data.map((personalData, i) => {
            const { id, title } = personalData;
            return (
              <Grid item sm={12} md={6} lg={4} key={i}>
                <Button
                  className={classes.exhibitLinkButton}
                  style={{ padding: 0 }}
                >
                  <Link to={`no${id}`} className={classes.simpleLink}>
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.cardImage}
                        image={data[id].images[0]}
                        title={data[id].title}
                      />
                      <CardHeader
                        title={<h2 className={classes.cardTitle}>{title}</h2>}
                      />
                    </Card>
                  </Link>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export { Exhibits };
