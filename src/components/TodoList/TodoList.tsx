/* eslint-disable react/no-array-index-key */
// import todos from '../../utils/constants';
import { useSelector } from 'react-redux';

import { allTodos } from '../../store/selectors/todos-selectors';
import TodoFilterPanel from '../TodoFilterPanel/TodoFilterPanel';
import TodoItem from '../TodoItem/TodoItem';
import styles from './styles/styles.module.css';

function TodoList() {
  const todos = useSelector(allTodos);

  // Reverse the todos array
  const reversedTodos = [...todos].reverse();

  return (
    <>
      <ul className={styles.todoList}>
        {reversedTodos.map((todo: { id: number; title: string; completed: boolean }) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
        <TodoFilterPanel />
      </ul>
      <p className={styles.caption}>Drag and drop to reorder list</p>
    </>
  );
}

export default TodoList;
