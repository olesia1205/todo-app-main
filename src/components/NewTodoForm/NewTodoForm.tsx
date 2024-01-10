import { useDispatch } from 'react-redux';

import { addTodo } from '../../store/actions/todos-actions';
import styles from './styles/styles.module.css';

function NewTodoForm() {
  const dispatch = useDispatch();

  const handeleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const newTodo = formData.get('newTodo') as string;
    dispatch(addTodo(newTodo));

    const form = evt.currentTarget as HTMLFormElement;
    form.reset();
  };

  return (
    <form className={styles.formWrapper} onSubmit={handeleSubmit}>
      <button type="submit" className={styles.submitButton} />
      <input
        className={styles.input}
        type="text"
        name="newTodo"
        placeholder="Create a new todo..."
      />
    </form>
  );
}

export default NewTodoForm;
