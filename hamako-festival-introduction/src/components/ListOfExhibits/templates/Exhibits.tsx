import { createStyles, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import { PersonalData } from '../organisms/PersonalData';

const useStyle = makeStyles(() =>
  createStyles({
    container: {
      width: '95%',
      margin: '0 auto',
      marginTop: '1%',
    },
  }),
);

// 展示数分の紹介リンク
const Exhibits: FC = () => {
  const classes = useStyle();
  return (
    <section>
      <div className={classes.container}>
        <PersonalData />
      </div>
    </section>
  );
};

export { Exhibits };
