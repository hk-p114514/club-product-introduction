import { FC } from "react";
<<<<<<< HEAD
import { PageControl } from "./components/templates/PageControl/PageControl";
import { LinkControl } from "./components/templates/LinkControl";
import { Routing } from "./components/templates/Routing";
=======
import { Route, Switch } from "react-router";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { NotFound } from "./components/pages/NotFound";
import { Link } from "react-router-dom";
import { PageControl } from "./components/templates/PageControl/PageControl";
>>>>>>> 5090e4a45e038f26762ae314c98bb7992893b02f

const App: FC = () => {
  return (
    <>
<<<<<<< HEAD
      <LinkControl />
      <PageControl />
      <Routing />
=======
      <ul>
        <li>
          <li>
            <Link to="/">るーと</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/NotFound">Not Found</Link>
          </li>
        </li>
      </ul>
      <PageControl />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
>>>>>>> 5090e4a45e038f26762ae314c98bb7992893b02f
    </>
  );
};

export default App;
