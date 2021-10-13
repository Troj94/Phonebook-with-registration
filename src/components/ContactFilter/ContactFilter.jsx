import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts } from 'redux/actions';

import css from 'components/ContactFilter/ContactFilter.module.css';

function ContactFilter({ findContact }) {
  return (
    <label className={css.label}>
      Find contact by name
      <input
        className={css.input}
        name="find"
        title="Введите имя или название контакта"
        onChange={findContact}
      />
    </label>
  );
}

const mapDispatchToProps = dispatch => ({
  findContact: e => dispatch(filterContacts(e.target.value)),
});

export default connect(null, mapDispatchToProps)(ContactFilter);

ContactFilter.propTypes = {
  findContact: PropTypes.func.isRequired,
};
