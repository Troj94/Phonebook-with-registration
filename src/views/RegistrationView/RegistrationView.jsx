import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import 'views/LoginView/LoginView.module.css';

function RegistrationView() {
  return (
    <>
      <Header />
      <h2>Create account:</h2>
      <RegistrationForm />
      <span>🠗 Already have account? 🠗</span> <br />
      {<Link to="/login">Log in</Link>}
    </>
  );
}

export default RegistrationView;
