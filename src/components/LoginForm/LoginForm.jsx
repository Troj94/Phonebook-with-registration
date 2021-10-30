import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from 'redux/auth/auth-operations';
import * as authSelectors from 'redux/auth/auth-selectors';
import Notiflix from 'notiflix';
import css from 'components/ContactFilter/ContactFilter.module.css';

function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (error) {
      Notiflix.Notify.failure('Wrong email or password');
    }
  }, [error]);

  function handleEmailInput(event) {
    setUser({ ...user, email: event.target.value });
  }
  function handlePasswordInput(event) {
    setUser({ ...user, password: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      authOperations.login({ email: user.email, password: user.password }),
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input
          className={css.input}
          type="email"
          name="email"
          required
          title="Place for your email. @ symbol is necessarily"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          value={user.email}
          placeholder="Email"
          onChange={handleEmailInput}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.input}
          type="password"
          name="password"
          required
          title="Place here your password. You need at least 6 characters"
          value={user.password}
          minLength="6"
          placeholder="Password"
          onChange={handlePasswordInput}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default LoginForm;
