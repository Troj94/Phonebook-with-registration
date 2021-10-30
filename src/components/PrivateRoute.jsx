import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import * as authSelectors from 'redux/auth/auth-selectors';

function PrivateRoute({ children, redirectTo = '/login', ...routeProps }) {
  const isLogged = useSelector(authSelectors.getIsLogged);

  return (
    <Route {...routeProps}>
      {isLogged ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

export default PrivateRoute;
