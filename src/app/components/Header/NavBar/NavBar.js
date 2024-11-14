"use client";
// Core
import { useState, useRef } from "react";
import Link from "next/link";

// Style
import s from "./NavBar.module.css";

function NavBar() {
  const [showCatalogMenu, setShowCatalogMenu] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowCatalogMenu(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowCatalogMenu(false);
    }, 100);
  };

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.listItem}>
          <Link className={s.navLink} href="/">
            Главная
          </Link>
        </li>
        <li className={s.listItem}>
          <Link className={s.navLink} href="/info">
            О производстве
          </Link>
        </li>
        <li
          className={`${s.listItem} ${s.catalogLink}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Каталог
          <ul className={`${s.catalogMenu} ${showCatalogMenu ? s.show : ""}`}>
            <li className={s.catalogMenuItem}>
              <Link href="/catalog/vodogreinye-kotly">Водогрейные котлы</Link>
            </li>
            <li className={s.catalogMenuItem}>
              <Link href="/catalog/parovye-kotly">Паровые котлы</Link>
            </li>
            <li className={s.catalogMenuItem}>
              <Link href="/catalog/kotly-na-peregretoj-vode">
                Котлы на перегретой воде
              </Link>
            </li>
            <li className={s.catalogMenuItem}>
              <Link href="/catalog/kotly-na-diatermicheskom-masle">
                Котлы на диатермическом масле
              </Link>
            </li>
          </ul>
        </li>
        <li className={s.listItem}>
          <Link className={s.navLink} href="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
