import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../../helpers";

function RouteHandler({ children, ...rest }) {
  let logged = isLogged();
  let authorized = rest.private && !logged ? false : true;

  const handleAuthorization = () => {
    return authorized ? children : <Redirect to="/signin" />
  };

  return <Route {...rest} render={() => handleAuthorization()} />;
}

export default RouteHandler;
