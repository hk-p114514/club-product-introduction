import { FC } from "react";
import { Route, Switch } from "react-router";
import { About } from "../pages/About";
import { Animation1 } from "../pages/animation/Animation1";
import { Animation2 } from "../pages/animation/Animation2";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Fetch } from "./Fetch";

const Routing: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/fetch" component={Fetch} />
        <Route path="/animation1" component={Animation1} />
        <Route path="/animation2" component={Animation2} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export { Routing };
