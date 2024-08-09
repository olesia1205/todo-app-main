import { useAppSelector } from '../../store/store';
import { ITodo } from '../../utils/types';
import TodoFilterPanel from '../TodoFilterPanel/TodoFilterPanel';
import TodoItem from '../TodoItem/TodoItem';
import styles from './styles/styles.module.css';

function TodoList() {
  const todos = useAppSelector((state) => state.todos.todos);
  const activeFilter = useAppSelector((state) => state.filter.filter);

  const visibleTodos = todos.filter((todo) => {
    switch (activeFilter) {
      case 'all':
        return true;
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const reversedTodos = [...visibleTodos].reverse();

  return (
    <>
      <ul className={styles.todoList}>
        {reversedTodos.map((todo: ITodo) => (
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
