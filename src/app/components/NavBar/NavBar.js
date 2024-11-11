import Link from "next/link";

// Style
import s from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <Link classname={s.navLink} href="/">
            Главная
          </Link>
        </li>
        <li>
          <Link classname={s.navLink} href="/info">
            О производстве
          </Link>
        </li>
        <li>
          <Link classname={s.navLink} href="/catalog">
            Каталог
          </Link>
        </li>
        <li>
          <Link classname={s.navLink} href="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
