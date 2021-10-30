import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from 'redux/auth/auth-operations';
import * as authSelectors from 'redux/auth/auth-selectors';
import Notiflix from 'notiflix';
import css from 'components/ContactFilter/ContactFilter.module.css';

function RegistrationForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleNameInput = event =>
    setUser({ ...user, name: event.target.value });
  const handleEmailInput = event =>
    setUser({ ...user, email: event.target.value });
  const handlePasswordInput = event =>
    setUser({ ...user, password: event.target.value });
  const handleConfirmPasswordInput = event =>
    setUser({ ...user, confirmPassword: event.target.value });

  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  async function handleSubmit(event) {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      Notiflix.Notify.failure('Password is not equal');
      return;
    }
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    dispatch(authOperations.registration(newUser));
  }

  useEffect(() => {
    if (!userName) return;
    Notiflix.Notify.success('You registration is successful');
  }, [userName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            required
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name"
            value={user.name}
            onChange={handleNameInput}
          />
        </label>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            required
            title="Place for your email. @ symbol is necessarily"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Email"
            value={user.email}
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
            minLength="6"
            placeholder="Password"
            value={user.password}
            onChange={handlePasswordInput}
          />
        </label>
        <label className={css.label}>
          Confirm password
          <input
            className={css.input}
            type="password"
            name="confirmPassword"
            required
            title="Place here your password one more time"
            minLength="6"
            placeholder="Password"
            value={user.confirmPassword}
            onChange={handleConfirmPasswordInput}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default RegistrationForm;
