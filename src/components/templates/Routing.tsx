import { FC } from "react";
import { Route, Switch } from "react-router";
import { About } from "../pages/About";
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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export { Routing };
