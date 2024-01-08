import useWindowWidth from '../../utils/windowWidth';
import style from './styles/styles.module.css';

const Filters = () => {
  return (
    <div className={style.filterButtonWrapper}>
      <button className={`${style.button} ${style.text} ${style.textBold}`}>All</button>
      <button className={`${style.button} ${style.text} ${style.textBold}`}>
        Active
      </button>
      <button className={`${style.button} ${style.text} ${style.textBold}`}>
        Completed
      </button>
    </div>
  );
};

function TodoFilterPanel() {
  const { width } = useWindowWidth();

  return (
    <div className={style.filterPanel}>
      <div className={style.filterPanelWrapper}>
        <p className={style.text}>5 items left</p>
        {width >= 600 && <Filters />}
        <button className={`${style.text} ${style.button}`}>Clear Completed</button>
      </div>
      {width < 600 && <Filters />}
    </div>
  );
}

export default TodoFilterPanel;
