import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';

import './App.css';

function App() {
  return (
    <div className="App">
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
}

export default App;
