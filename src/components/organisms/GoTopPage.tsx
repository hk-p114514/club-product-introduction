import { FC } from "react";
import { useHistory } from "react-router";
import { Button } from "../molecules/Button";

const GoTopPage: FC = () => {
  const history = useHistory();

  const toTop = () => {
    history.push("/");
    console.log("HOME へ ゴー!!!!");
    return;
  };

  return (
    <>
      <Button text="トップへ" func={toTop} />
    </>
  );
};

export { GoTopPage };
