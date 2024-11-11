// Components
import NavBar from "../NavBar/NavBar";

// Style
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerContent}>
          <img className={s.logo} src="/images/logo.png" alt="Logo" />
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
