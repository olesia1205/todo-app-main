import { useDispatch } from 'react-redux';

import setQuery from '../../store/actions/queries-action';
import styles from './styles/styles.module.css';

function SeardchTodoForm() {
  const dispatch = useDispatch();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const query = evt.target.value;
    dispatch(setQuery(query));
  };

  return (
    <form className={styles.formWrapper}>
      <input
        className={styles.input}
        type="text"
        name="searchTodo"
        placeholder="Search a todo..."
        onChange={handleChange}
        autoComplete="off"
      />
    </form>
  );
}

export default SeardchTodoForm;
