import { FC } from "react";
import { useHistory } from "react-router";
import { Button } from "../molecules/Button";

const NextPage: FC = () => {
  const history = useHistory();
  return (
    <>
      <Button color="primary" text="進む" func={history.goForward} />
    </>
  );
};

export { NextPage };
