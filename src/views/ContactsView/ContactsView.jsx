import ContactForm from 'components/ContactForm/ContactForm';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactList/ContactList';
import Header from 'components/Header/Header';

function ContactsView() {
  return (
    <>
      <Header logoutButton />
      <ContactForm />
      <h2>Your contacts:</h2>
      <ContactFilter />
      <ContactList />
    </>
  );
}

export default ContactsView;
