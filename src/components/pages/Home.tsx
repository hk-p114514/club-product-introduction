import { FC } from "react";
import { Helmet } from "react-helmet";
import "../../index.css";

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="text-x1">This is Home component</h1>
    </>
  );
};

export { Home };
