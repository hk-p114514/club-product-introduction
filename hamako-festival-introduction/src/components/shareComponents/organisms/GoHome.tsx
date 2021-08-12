import { Button } from '@material-ui/core';
import { FC } from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { useHistory } from 'react-router';

const GoHome: FC = () => {
  const history = useHistory();
  return (
    <>
      <Button
        variant="contained"
        color="default"
        onClick={() => history.push('/')}
        startIcon={<HomeOutlinedIcon />}
      >
        ホームへ
      </Button>
    </>
  );
};

export { GoHome };
