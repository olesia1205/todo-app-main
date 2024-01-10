import { useState } from 'react';

import styles from './styles/styles.module.css';

type TTodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

function TodoItem({ id, title, completed }: TTodoItem) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={styles.container}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onFocus={() => {
        setIsHovered(true);
      }}
    >
      <label
        className={`${styles.label} ${
          completed
            ? `${styles.checkboxLabel} ${styles.checkboxLabelCompleted}`
            : styles.checkboxLabel
        }`}
        htmlFor={`checkbox${id}`}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          id={`checkbox${id}`}
          checked={completed}
          onChange={() => {}}
        />
        {title}
      </label>
      {isHovered ? <button className={styles.deleteButton} /> : null}
    </li>
  );
}

export default TodoItem;
