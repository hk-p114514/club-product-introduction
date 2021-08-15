import { FC } from "react";
import "./Animation2.css";

const Animation2: FC = () => {
  return (
    <>
      <div className="context">
        <h1>Pure Css Animated Background</h1>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export { Animation2 };
