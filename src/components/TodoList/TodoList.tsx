/* eslint-disable react/no-array-index-key */
import todos from '../../utils/constants';
import TodoItem from '../TodoItem/TodoItem';
import styles from './styles/styles.module.css';

function TodoList() {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo: { title: string; completed: boolean }, index: number) => (
        <TodoItem key={index} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
}

export default TodoList;
