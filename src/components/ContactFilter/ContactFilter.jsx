import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getFilter, changeFilter } from 'redux/reducer';
import css from 'components/ContactFilter/ContactFilter.module.css';

function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();
  const inputId = uuidv4();

  return (
    <label className={css.label}>
      Find contact by name
      <input
        id={inputId}
        className={css.input}
        title="Введите имя или название контакта"
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Name"
      />
    </label>
  );
}

export default Filter;
