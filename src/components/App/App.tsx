import '../../index.css';

import Header from '../Header/Header';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import SeardchTodoForm from '../SearchTodoForm/SeardchTodoForm';
import TodoList from '../TodoList/TodoList';
import style from './styles/styles.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <SeardchTodoForm />
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
