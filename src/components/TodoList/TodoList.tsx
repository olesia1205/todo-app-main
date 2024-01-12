/* eslint-disable react/no-array-index-key */
import { useSelector } from 'react-redux';

import { selectActiveFilter } from '../../store/selectors/filters-selectors';
import { selectVisibleTodos } from '../../store/selectors/todos-selectors';
import TodoFilterPanel from '../TodoFilterPanel/TodoFilterPanel';
import TodoItem from '../TodoItem/TodoItem';
import styles from './styles/styles.module.css';

function TodoList() {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

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
