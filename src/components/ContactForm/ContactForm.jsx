import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as phonebookSelectors from 'redux/phonebook/phonebook-selectors';
import * as phonebookOperations from 'redux/phonebook/phonebook-operations';
import Spinner from 'components/Loader/Loader';

import Notiflix from 'notiflix';
import css from 'components/ContactForm/ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);
  const error = useSelector(phonebookSelectors.getError);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [loaderIsActive, setLoaderIsActive] = useState(false);

  useEffect(() => {
    setName('');
    setNumber('');
  }, [contacts.length]);

  async function formSubmit(event) {
    setLoaderIsActive(true);
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      setLoaderIsActive(false);
      return;
    }
    dispatch(phonebookOperations.fetchAddContact({ name, number })).finally(
      () => Notiflix.Notify.success('The contacts is added'),
      setLoaderIsActive(false),
    );
  }

  function formChange(event) {
    switch (event.target.name) {
      case 'name':
        return setName(event.target.value);
      case 'number':
        return setNumber(event.target.value);
      default:
        return;
    }
  }

  useEffect(() => {
    if (error) {
      Notiflix.Notify.failure('Something gone wrong, try again');
      return;
    }
  }, [contacts, error]);

  return (
    <form className={css.form} autoComplete={'on'} onSubmit={formSubmit}>
      <label className={css.label}>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Name"
          required={true}
          value={name}
          onChange={formChange}
        />
      </label>
      <label className={css.label}>
        Number:
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Number"
          required={true}
          value={number}
          onChange={formChange}
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
      {loaderIsActive && <Spinner />}
    </form>
  );
}

export default ContactForm;
