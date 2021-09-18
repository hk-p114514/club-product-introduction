import { AppBar, useTheme } from '@material-ui/core';
import { FC } from 'react';
import { GoHome } from '../../organisms/GoHome';
import { Title } from '../../organisms/Title';
import { useStyle } from './Header';
import './header.css';

type Props = {
  year: number;
};

const HeaderMobile: FC<Props> = (props: Props) => {
  const { year } = props;
  const title: string = `${year}浜工祭`;
  const theme = useTheme();
  const styles = useStyle(theme)();

  return (
    <>
      <div className={styles.root}>
        <AppBar position="fixed" className="appBar">
          <div className="appBar-contents">
            <GoHome />
            <Title title={title} />
          </div>
        </AppBar>
        <div className={styles.toolbarMargin} />
      </div>
    </>
  );
};

export { HeaderMobile };
