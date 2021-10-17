import PropTypes from 'prop-types';
import { phonebookApi } from 'redux/api';
import css from 'components/ContactItem/ContactItem.module.css';

function ContactItem({ id, name, number }) {
  const [deleteContact] = phonebookApi.useDeleteContactMutation();

  return (
    <li className={css.contactItem} key={id}>
      <span>{name}: </span>
      <span>{number} </span>
      <span>
        <button
          type="button"
          onClick={() => deleteContact(id)}
          id={id}
          className={css.button}
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
