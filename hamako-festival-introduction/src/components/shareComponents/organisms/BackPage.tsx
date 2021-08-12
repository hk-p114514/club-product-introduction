import { Button } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { FC } from 'react';
import { useHistory } from 'react-router';

const BackPage: FC = () => {
  const history = useHistory();
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={history.goBack}
        startIcon={<ArrowBackOutlinedIcon />}
      >
        戻る
      </Button>
    </>
  );
};

export { BackPage };
