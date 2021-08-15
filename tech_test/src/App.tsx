import { FC } from "react";
import { PageControl } from "./components/templates/PageControl/PageControl";
import { LinkControl } from "./components/templates/LinkControl";
import { Routing } from "./components/templates/Routing";
import "./css/App.css";
import { Animation2 } from "./components/pages/animation/Animation2";

const App: FC = () => {
  return (
    <>
      <div className="main">
        <LinkControl />
        <PageControl />
        <Routing />
      </div>
      <Animation2 />
    </>
  );
};

export default App;
