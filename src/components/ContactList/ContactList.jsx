import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as phonebookSelectors from 'redux/phonebook/phonebook-selectors';
import * as phonebookOperations from 'redux/phonebook/phonebook-operations';
import ContactItem from 'components/ContactItem/ContactItem';

import css from 'components/ContactList/ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);
  const filter = useSelector(phonebookSelectors.getFilter);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={css.contactList}>
      {contacts.length === 0 && <h4>No contacts here.</h4>}
      {contacts.length > 0 && filteredContacts.length === 0 && (
        <h4>Sorry, there are no contacts with this name.</h4>
      )}
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}

export default ContactList;
