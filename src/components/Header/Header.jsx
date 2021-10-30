import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import * as authOperations from 'redux/auth/auth-operations';
import * as authSelectors from 'redux/auth/auth-selectors';

import 'components/Header/animation.css';
import css from 'components/Header/Header.module.css';

function Header({ logoutButton = false }) {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.getUserEmail);

  const handleLogoutButton = () => {
    dispatch(authOperations.logout());
  };

  return (
    <header className={css.header}>
      <CSSTransition
        timeout={500}
        classNames="animation"
        appear={true}
        in={true}
      >
        <h1 className={css.title}>Phonebook</h1>
      </CSSTransition>
      {logoutButton && (
        <div>
          <h3 className={css.title}>Hello, {userEmail}</h3>
          <button type="button" onClick={handleLogoutButton}>
            Log out
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
