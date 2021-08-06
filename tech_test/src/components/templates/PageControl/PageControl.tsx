import { FC } from "react";
import { BackPage } from "../../organisms/BackPage";
import { GoTopPage } from "../../organisms/GoTopPage";
import { NextPage } from "../../organisms/NextPage";
import "./pageControl.css";

const PageControl: FC = () => {
  return (
    <>
      <section className="page-control">
        <GoTopPage />
        <BackPage />
        <NextPage />
      </section>
    </>
  );
};

export { PageControl };
