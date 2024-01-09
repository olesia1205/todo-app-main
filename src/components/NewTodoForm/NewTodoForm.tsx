/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './styles/styles.module.css';

function NewTodoForm() {
  return (
    <form className={styles.formWrapper}>
      <button type="submit" className={styles.submitButton} />
      <input
        className={styles.input}
        type="text"
        name="new todo"
        placeholder="Create a new todo..."
      />
    </form>
  );
}

export default NewTodoForm;
