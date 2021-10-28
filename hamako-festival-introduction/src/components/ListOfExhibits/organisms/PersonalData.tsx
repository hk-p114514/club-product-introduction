import { FC } from 'react';
import {
  Button,
  Card,
  CardHeader,
  createStyles,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { data } from '../../../data/data';

const PersonalData: FC = () => {
  const classes = useStyle();

  return (
    <Grid container className={classes.exhibits} spacing={0}>
      {data.map((personalData, index) => {
        const { id, title } = personalData;
        return (
          <>
            <Grid item sm={12} md={6} lg={4} key={index} className="container">
              <Button
                className={classes.exhibitLinkButton}
                style={{
                  padding: 0,
                }}
              >
                <Link to={`no${id}`} className={classes.simpleLink}>
                  <Card>
                    <img
                      src={data[id].images[0]}
                      className={classes.cardImage}
                    />
                    <CardHeader
                      title={<h2 className={classes.cardTitle}>{title}</h2>}
                    />
                  </Card>
                </Link>
              </Button>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

const useStyle = makeStyles(() =>
  createStyles({
    exhibits: {
      display: 'flex',
    },
    exhibitLinkButton: {
      display: 'block',
      margin: '0 auto',
      overflow: 'hidden',
      boxShadow: '0px 5px 10px 1px rgba(0, 0, 0, 0.6)',
      transition: '0.1s',
      '&:hover': {
        boxShadow: '0px 8px 12px 2px rgba(0, 0, 0, 0.3)',
      },
    },

    simpleLink: {
      textDecoration: 'none',
    },

    cardTitle: {
      fontSize: '100%',
      fontWeight: 'bold',
    },

    cardImage: {
      margin: '0 auto',
    },
  }),
);

export { PersonalData };
