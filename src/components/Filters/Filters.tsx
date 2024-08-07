import { setFilter } from '../../store/filterSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import style from './styles/styles.module.css';

function Filters() {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector((state) => state.filter.filter);

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
}

export default Filters;
