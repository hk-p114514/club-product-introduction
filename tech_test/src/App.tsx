import { FC } from "react";
import { PageControl } from "./components/templates/PageControl/PageControl";
import { LinkControl } from "./components/templates/LinkControl";
import { Routing } from "./components/templates/Routing";

const App: FC = () => {
  return (
    <>
      <LinkControl />
      <PageControl />
      <Routing />
    </>
  );
};

export default App;
