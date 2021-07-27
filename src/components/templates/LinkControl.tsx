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
      </ul>
    </>
  );
};

export { LinkControl };
