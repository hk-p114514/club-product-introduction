import { FC } from "react";
import ReactPlayer from "react-player";
import video from "./video1.mp4";

const Video: FC = () => {
  return <ReactPlayer url={video} width="300px" height="500px" />;
};

export { Video };
