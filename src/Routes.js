import { Switch, Route } from "react-router-dom";
import {Home, About, NotFound} from './pages';

function Routes(props) {
  return (
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
  );
}

export default Routes;
