import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { Notification } from 'components/Notification/Notification';
import css from 'components/ContactList/ContactList.module.css';

function ContactList({ contacts }) {
  return (
    <ul className={css.contactList}>
      {contacts.length === 0 ? (
        <Notification message="No contacts here =(" />
      ) : (
        <div>
          <h2>Contacts:</h2>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </div>
      )}
    </ul>
  );
}

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: items.filter(
    ({ name }) => name.toLowerCase().search(filter) !== -1,
  ),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
