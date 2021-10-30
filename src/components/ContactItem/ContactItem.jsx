import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as phonebookOperations from 'redux/phonebook/phonebook-operations';

import css from 'components/ContactItem/ContactItem.module.css';

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem} key={id}>
      <span>{name}: </span>
      <span>{number} </span>
      <span>
        <button
          className={css.button}
          id={id}
          type="button"
          onClick={() => dispatch(phonebookOperations.fetchDeleteContact(id))}
        >
          Delete
        </button>
      </span>
    </li>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
