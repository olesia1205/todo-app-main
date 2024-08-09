/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editTodo, removeTodo, toggleTodo } from '../../store/todosSlice';
import { ITodo } from '../../utils/types';
import styles from './styles/styles.module.css';

function TodoItem({ id, title, completed }: ITodo) {
  const [isHovered, setIsHovered] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const dispatch = useDispatch();

  const handleTitleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedTitle(evt.target.value);
    dispatch(editTodo({ id, title: editedTitle }));
  };

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
            ? `${styles.labelСrossedOut} ${styles.checkboxLabel} ${styles.checkboxLabelCompleted}`
            : styles.checkboxLabel
        }`}
        htmlFor={`checkbox${id}`}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          id={`checkbox${id}`}
          checked={completed}
          onChange={() => dispatch(toggleTodo(id))}
        />
        <textarea
          className={styles.todoTitle}
          value={editedTitle}
          onChange={handleTitleChange}
          rows={Math.ceil(editedTitle.length / 50) + editedTitle.split('\n').length - 1} // to set the height of the <textarea> automatically based on the content and number of line breaks
        />
      </label>
      {isHovered ? (
        <button
          className={styles.deleteButton}
          onClick={() => dispatch(removeTodo(id))}
        />
      ) : null}
    </li>
  );
}

export default TodoItem;
