/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortByDateTodos } from '../../store/actions/todos-actions';
import { selectActiveFilter } from '../../store/selectors/filters-selectors';
import { selectQuery } from '../../store/selectors/queries-selectors';
import {
  selectSortedTodos,
  selectVisibleTodos,
} from '../../store/selectors/todos-selectors';
import TodoFilterPanel from '../TodoFilterPanel/TodoFilterPanel';
import TodoItem from '../TodoItem/TodoItem';
import styles from './styles/styles.module.css';

function TodoList() {
  const dispatch = useDispatch();

  const [sortOrder, setSortOrder] = useState('desc');
  const activeFilter = useSelector(selectActiveFilter);
  const query = useSelector(selectQuery);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const filteredByQueryTodos = todos.filter(
    (todo: { id: number; title: string; completed: boolean }) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
  );
  const sortedByDateTodos = useSelector(selectSortedTodos);

  const todosToRender = filteredByQueryTodos || todos || sortedByDateTodos;

  // Reverse the todos array
  const reversedTodos = [...todosToRender].reverse();

  const handleSortByDate = () => {
    if (sortOrder === 'desc') {
      dispatch(sortByDateTodos());
      setSortOrder('asc');
    } else {
      dispatch(sortByDateTodos());
      setSortOrder('desc');
    }
  };

  return (
    <>
      <ul className={styles.todoList}>
        {reversedTodos.map(
          (todo: { id: number; title: string; completed: boolean; created: string }) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              created={todo.created}
            />
          )
        )}
        <TodoFilterPanel />
      </ul>
      <button
        className={`${styles.caption} ${styles.filterByDateButton}`}
        onClick={handleSortByDate}
      >
        Sort by date {sortOrder === 'desc' ? '(Descending)' : '(Ascending)'}
      </button>
      <p className={styles.caption}>Drag and drop to reorder list</p>
    </>
  );
}

export default TodoList;
