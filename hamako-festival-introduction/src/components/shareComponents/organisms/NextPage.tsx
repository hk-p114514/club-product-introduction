import { Button } from '@material-ui/core';
import { FC } from 'react';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { useHistory } from 'react-router';

const NextPage: FC = () => {
  const history = useHistory();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={history.goForward}
        startIcon={<ArrowForwardOutlinedIcon />}
      >
        進む
      </Button>
    </>
  );
};

export { NextPage };
