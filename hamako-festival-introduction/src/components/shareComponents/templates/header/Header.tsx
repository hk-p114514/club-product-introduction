/* ヘッダー部分*/
import { AppBar, makeStyles, Theme, useTheme } from '@material-ui/core';
import { Title } from '../../organisms/Title';
import { FC } from 'react';
import { PageController } from '../PageController';
import './header.css';

type Props = {
  year: number;
};

const useStyle = (theme: Theme) => {
  return makeStyles({
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    toolbarMargin: theme.mixins.toolbar,
  });
};

const Header: FC<Props> = (props: Props) => {
  const { year } = props;
  const title: string = `${year}浜工祭`;
  const theme = useTheme();
  const styles = useStyle(theme)();

  return (
    <div className={styles.root}>
      <AppBar position="fixed" className="appBar">
        <div className="appBar-contents">
          <PageController />
          <Title title={title} />
        </div>
      </AppBar>
      <div className={styles.toolbarMargin} />
    </div>
  );
};

export { Header, useStyle };
