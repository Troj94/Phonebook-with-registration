import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { phonebookApi } from 'redux/api';
import { CSSTransition } from 'react-transition-group';
import Notiflix from 'notiflix';
import css from 'components/ContactForm/ContactForm.module.css';
import 'components/ContactForm/animation.css';

import { Spinner } from 'components/Loader/Loader';

function ContactForm() {
  const { data: contacts = [] } = phonebookApi.useFetchContactsQuery();
  const [addContact] = phonebookApi.useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [loaderIsActive, setLoaderIsActive] = useState(false);

  useEffect(() => {
    setName('');
    setNumber('');
  }, [contacts.length]);

  let id = {
    nameId: uuidv4(),
    numberId: uuidv4(),
  };

  async function formSubmit(event) {
    event.preventDefault();
    setLoaderIsActive(true);

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      setLoaderIsActive(false);
      return;
    }
    addContact({ name, number }).finally(() => setLoaderIsActive(false));
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
      {loaderIsActive && <Spinner />}
    </div>
  );
}

export default ContactForm;

Notiflix.Notify.init({
  timeout: 2500,
});
