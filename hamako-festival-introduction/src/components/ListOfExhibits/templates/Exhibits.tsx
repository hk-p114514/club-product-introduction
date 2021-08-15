import { Button, createStyles, Grid, makeStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../../data/data';

const useStyle = makeStyles(() =>
  createStyles({
    container: {
      width: '95%',
      margin: '0 auto',
      marginTop: '1%',
    },
    simpleLink: {
      textDecoration: 'none',
      opacity: '0.85',
      transition: '1s',
      '&:hover': {
        opacity: '1',
      },
    },
    exhibitLinkButton: {
      padding: 0,
    },
  })
);

// 展示数分の紹介リンク
const Exhibits: FC = () => {
  const classes = useStyle();
  return (
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
                  <Paper elevation={3} className="paper">
                    <img src={data[id].images[0]} alt="" />
                    <h2>{title}</h2>
                  </Paper>
                </Link>
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export { Exhibits };
