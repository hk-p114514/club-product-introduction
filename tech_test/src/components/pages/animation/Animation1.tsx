import { FC } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { rand } from "../../../functions/rand";
import "./Animation1.css";

const Animation1: FC = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <div className="confetti-container">
        <Confetti
          className="confetti"
          width={width}
          height={height}
          confettiSource={{ x: 0, y: height, w: width, h: 0 }}
          style={{ zIndex: -1 }}
          recycle={true}
          numberOfPieces={100}
          gravity={-0.05}
          opacity={0.8}
          initialVelocityX={10}
          initialVelocityY={10}
          drawShape={(ctx) => {
            ctx.beginPath();
            ctx.arc(0, 0, 10, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.closePath();
          }}
        />
      </div>
    </>
  );
};

export { Animation1 };
