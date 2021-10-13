import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from 'redux/actions';
import css from 'components/ContactItem/ContactItem.module.css';

function ContactItem({ id, name, number, deleteContact }) {
  return (
    <li className={css.contactItem}>
      <span>{name}: </span>
      <span>{number} </span>
      <span>
        <button
          type="button"
          onClick={deleteContact}
          id={id}
          className={css.button}
        >
          Delete
        </button>
      </span>
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteContact: e => dispatch(deleteContact(e.target.id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
