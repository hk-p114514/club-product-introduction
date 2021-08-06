import { FC } from "react";
import { Helmet } from "react-helmet";
import "./about.css";

const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1>This is About component</h1>
      <section className="images">
        <img
          src="https://2.bp.blogspot.com/-YCw8eswYmqY/Uab3t8sTY_I/AAAAAAAAUTA/Is0hgnU6cfA/s800/ketsuekigata_ab.png"
          alt="ab"
        />
        <img
          src="https://4.bp.blogspot.com/-c6WLFYVEQSg/Uab3uC3kB9I/AAAAAAAAUTI/33QLfXrzhYc/s800/ketsuekigata_o.png"
          alt="o"
        />
        <img
          src="https://3.bp.blogspot.com/-CAlaKdFC3YQ/U2srtm3hKJI/AAAAAAAAf2w/I1Mtj-sliY0/s800/jisyaku_u.png"
          alt="ut"
        />
        <img
          src="https://3.bp.blogspot.com/-8A-nrlbQn0Y/WerKrTRbEUI/AAAAAAABHp8/YA6-DgL18q8_DRqqLMhN4rm8I1f3US_LQCLcBGAs/s800/fashion_tshirt1_white.png"
          alt="t"
        />
      </section>
    </>
  );
};

export { About };
