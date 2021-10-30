import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as phonebookReducer from 'redux/phonebook/phonebook-reducer';

import css from 'components/ContactFilter/ContactFilter.module.css';

function ContactFilter() {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    dispatch(phonebookReducer.changeFilter(filterValue));
  }, [dispatch, filterValue]);

  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        className={css.input}
        title="Start to write name of contact to find"
        type="text"
        placeholder="Name"
        value={filterValue}
        onChange={event => setFilterValue(event.target.value)}
      />
    </label>
  );
}

export default ContactFilter;
