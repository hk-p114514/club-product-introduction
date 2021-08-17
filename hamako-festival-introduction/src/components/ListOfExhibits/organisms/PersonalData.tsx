import { FC } from 'react';
import {
  Button,
  Card,
  CardHeader,
  createStyles,
  Grid,
  makeStyles,
  CircularProgress,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { data } from '../../../data/data';
import { Img } from 'react-image';

const PersonalData: FC = () => {
  const classes = useStyle();
  return (
    <Grid container className="exhibits" spacing={10}>
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
                  <Img
                    src={data[id].images[0]}
                    className={classes.cardImage}
                    loader={<CircularProgress />}
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
  );
};

const useStyle = makeStyles(() =>
  createStyles({
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

export { PersonalData };
