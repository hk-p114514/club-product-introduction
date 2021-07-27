import { FC } from "react";
import { Button } from "../molecules/Button";
import { useHistory } from "react-router-dom";

const BackPage: FC = () => {
  const history = useHistory();
  return (
    <>
      <Button color="secondary" text="戻る" func={history.goBack} />
    </>
  );
};

export { BackPage };
