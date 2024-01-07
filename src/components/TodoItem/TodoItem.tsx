import styles from './styles/styles.module.css';

type TTodoItem = {
  key: number;
  title: string;
  completed: boolean;
};

function TodoItem({ key, title, completed }: TTodoItem) {
  return (
    <li className={styles.container}>
      <label
        className={`${styles.label} ${
          completed
            ? `${styles.checkboxLabel} ${styles.checkboxLabelCompleted}`
            : styles.checkboxLabel
        }`}
        htmlFor={`checkbox${key}`}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          id={`checkbox${key}`}
          checked={completed}
        />
        {title}
      </label>
      <button className={styles.deleteButton} />
    </li>
  );
}

export default TodoItem;
