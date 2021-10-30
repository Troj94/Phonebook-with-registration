import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import * as authSelectors from 'redux/auth/auth-selectors';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLogged = useSelector(authSelectors.getIsLogged);

  const shouldRedirect = isLogged && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

export default PublicRoute;
