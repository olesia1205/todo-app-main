import { useAppDispatch, useAppSelector } from '../../store/store';
import { clearCompletedTodos } from '../../store/todosSlice';
import useWindowWidth from '../../utils/windowWidth';
import Filters from '../Filters/Filters';
import style from './styles/styles.module.css';

function TodoFilterPanel() {
  const { width } = useWindowWidth();
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const activeTodos = todos.filter((todo) => !todo.completed);

  const handleClearCompleted = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className={style.filterPanel}>
      <div className={style.filterPanelWrapper}>
        <p className={style.text}>{activeTodos.length} items left</p>
        {width > 600 && <Filters />}
        <button
          className={`${style.text} ${style.button}`}
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      </div>
      {width <= 600 && <Filters />}
    </div>
  );
}

export default TodoFilterPanel;
