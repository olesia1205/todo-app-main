import { useAppDispatch } from '../../store/store';
import { addTodo } from '../../store/todosSlice';
import styles from './styles/styles.module.css';

function NewTodoForm() {
  const dispatch = useAppDispatch();

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
        autoComplete="off"
      />
    </form>
  );
}

export default NewTodoForm;
