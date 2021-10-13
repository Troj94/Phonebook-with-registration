import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addContact } from 'redux/actions';
import { CSSTransition } from 'react-transition-group';
import Notiflix from 'notiflix';
import css from 'components/ContactForm/ContactForm.module.css';
import 'components/ContactForm/animation.css';

function ContactForm({ onSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let id = {
    nameId: uuidv4(),
    numberId: uuidv4(),
  };

  function formSubmit(event) {
    event.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
    } else {
      onSubmit(name, number);
      setName('');
      setNumber('');
    }
  }

  function formChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <CSSTransition
        timeout={500}
        classNames="animation"
        appear={true}
        in={true}
      >
        <h1>Phonebook</h1>
      </CSSTransition>

      <form onSubmit={formSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            id={id.nameId}
            value={name}
            onChange={formChange}
            placeholder="Name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            id={id.numberId}
            value={number}
            onChange={formChange}
            placeholder="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ contacts: { items } }) => {
  return {
    contacts: items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (name, number) => dispatch(addContact(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

Notiflix.Notify.init({
  timeout: 2500,
});
