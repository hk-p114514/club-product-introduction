import { FC } from "react";
import { Paper } from "@material-ui/core";

type Props = {
  text: string;
  fontColor: string;
  bgColor: string;
};

const Title: FC<Props> = (props: Props) => {
  const { text, fontColor, bgColor } = props;
  return (
    <>
      <Paper>
        <p>{text}</p>
      </Paper>
    </>
  );
};

export { Title };
