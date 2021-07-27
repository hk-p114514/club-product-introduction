import { FC } from "react";
import { Button as MaterialButton } from "@material-ui/core";

type Props = {
  text: string;
  color?: "primary" | "secondary";
  func: Function;
};

const Button: FC<Props> = (props: Props) => {
  const { text, color, func } = props;
  return (
    <>
      <MaterialButton
        variant="contained"
        color={color}
        onClick={() => {
          func();
        }}
      >
        {text}
      </MaterialButton>
    </>
  );
};

export { Button };
