import style from './styles/styles.module.css';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>TODO</h1>
        <button className={style.colorThemeButton} />
      </div>
    </header>
  );
}

export default Header;
