import { lazy, Suspense, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import * as authOperations from 'redux/auth/auth-operations';
import * as authSelectors from 'redux/auth/auth-selectors';
import Spinner from 'components/Loader/Loader';

import './App.css';

const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegistrationView = lazy(() =>
  import('views/RegistrationView/RegistrationView'),
);
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

const App = () => {
  const tokenExisting = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const isFirstLoadApp = useRef(true);
  const isLogged = useSelector(authSelectors.getIsLogged);

  useEffect(() => {
    if (!isFirstLoadApp.current) return;
    if (!tokenExisting) return;

    authOperations.token.set(tokenExisting);
    dispatch(authOperations.getCurrentUser(tokenExisting));

    isFirstLoadApp.current = false;
  }, [dispatch, tokenExisting]);

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRoute restricted path="/login">
            <LoginView />
          </PublicRoute>
          <PublicRoute restricted path="/register">
            <RegistrationView />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
          <Redirect to={isLogged ? '/contacts' : '/login'} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
