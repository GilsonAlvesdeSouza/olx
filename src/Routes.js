import { Switch } from "react-router-dom";
import { Home, About, NotFound, Signin, Signup, AdPage } from "./pages";
import {RouteHandler} from "./components"
function Routes(props) {
  return (
    <Switch>
      <RouteHandler exact path="/">
        <Home />
      </RouteHandler>
      <RouteHandler exact path="/about">
        <About />
      </RouteHandler>
      <RouteHandler exact path="/signin">
        <Signin />
      </RouteHandler>
      <RouteHandler exact path="/signup">
        <Signup />
      </RouteHandler>
      <RouteHandler exact path="/ad/:id">
        <AdPage />
      </RouteHandler>
      <RouteHandler private exact path="/post-an-ad">
        <About />
      </RouteHandler>
      <RouteHandler>
        <NotFound />
      </RouteHandler>
    </Switch>
  );
}

export default Routes;
