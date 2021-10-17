import { useSelector } from 'react-redux';
import { phonebookApi } from 'redux/api';
import { getFilter } from 'redux/reducer';
import ContactItem from 'components/ContactItem/ContactItem';
import { Notification } from 'components/Notification/Notification';
import css from 'components/ContactList/ContactList.module.css';

function ContactList() {
  const { data: contacts = [] } = phonebookApi.useFetchContactsQuery();

  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.length === 0 ? (
          <Notification message="No contacts here =(" />
        ) : (
          <div>
            <h2>Contacts:</h2>
            {filteredContacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
          </div>
        )}
      </ul>
    </>
  );
}

export default ContactList;
