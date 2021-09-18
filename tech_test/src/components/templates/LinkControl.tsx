import { FC } from "react";
import { Link } from "react-router-dom";

const LinkControl: FC = () => {
  return (
    <>
      <ul>
        <li>
          {/* リンク -> URLパラメータを書き換える */}
          <Link to="/">るーと</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/NotFound">Not Found</Link>
        </li>
        <li>
          <Link to="/fetch">fetch</Link>
        </li>
        <li>
          <Link to="/animation1">animation1</Link>
        </li>
        <li>
          <Link to="/animation2">animation2</Link>
        </li>
      </ul>
    </>
  );
};

export { LinkControl };
