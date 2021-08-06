import { FC } from "react";
import { Helmet } from "react-helmet";

const NotFound: FC = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1>Not Foundだお</h1>
    </>
  );
};

export { NotFound };
