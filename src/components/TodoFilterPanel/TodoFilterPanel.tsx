import { useDispatch, useSelector } from 'react-redux';

import setFilter from '../../store/actions/filters-action';
import { clearCompletedTodos } from '../../store/actions/todos-actions';
import { selectActiveFilter } from '../../store/selectors/filters-selectors';
import { selectActiveTodos } from '../../store/selectors/todos-selectors';
import useWindowWidth from '../../utils/windowWidth';
import style from './styles/styles.module.css';

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  return (
    <div className={style.filterButtonWrapper}>
      <button
        className={
          activeFilter === 'all'
            ? `${style.button} ${style.buttonActive} ${style.text} ${style.textBold}`
            : `${style.button} ${style.text} ${style.textBold}`
        }
        onClick={() => dispatch(setFilter('all'))}
      >
        All
      </button>
      <button
        className={
          activeFilter === 'active'
            ? `${style.button} ${style.buttonActive} ${style.text} ${style.textBold}`
            : `${style.button} ${style.text} ${style.textBold}`
        }
        onClick={() => dispatch(setFilter('active'))}
      >
        Active
      </button>
      <button
        className={
          activeFilter === 'completed'
            ? `${style.button} ${style.buttonActive} ${style.text} ${style.textBold}`
            : `${style.button} ${style.text} ${style.textBold}`
        }
        onClick={() => dispatch(setFilter('completed'))}
      >
        Completed
      </button>
    </div>
  );
};

function TodoFilterPanel() {
  const { width } = useWindowWidth();
  const dispatch = useDispatch();
  const activeTodos = useSelector(selectActiveTodos);

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
