import { FC } from "react";
import { Route, Switch } from "react-router";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { NotFound } from "./components/pages/NotFound";
import { Link } from "react-router-dom";

const App: FC = () => {
  return (
    <>
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
    </>
  );
};

export default App;
