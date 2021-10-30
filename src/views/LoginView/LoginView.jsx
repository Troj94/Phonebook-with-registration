import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import LoginForm from 'components/LoginForm/LoginForm';

import 'views/LoginView/LoginView.module.css';

function LoginView() {
  return (
    <>
      <Header />
      <h2>Log in:</h2>
      <LoginForm />
      <span>🠗 If you want to register account 🠗</span> <br />
      {<Link to="/register">Registration form</Link>}
    </>
  );
}

export default LoginView;
