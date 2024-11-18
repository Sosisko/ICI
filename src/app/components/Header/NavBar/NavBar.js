"use client";
// Core
import { useState, useRef } from "react";
import Link from "next/link";

// Style
import s from "./NavBar.module.css";

function NavBar({isVisible}) {
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

console.log(isVisible);


  return (
    <nav className={s.nav}>
      <ul className={`${s.list}`}>
        <li className={`${s.listItem} ${isVisible ? s.smallListItem : ""}`}>
          <Link className={s.navLink} href="/">
            Главная
          </Link>
        </li>
        <li className={`${s.listItem} ${isVisible ? s.smallListItem : ""}`}>
          <Link className={s.navLink} href="/info">
            О производстве
          </Link>
        </li>
        <li
          className={`${s.listItem} ${s.catalogLink} ${isVisible ? s.smallListItem : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Каталог
          <span className={s.caret}></span>
          <ul className={`${s.catalogMenu} ${showCatalogMenu ? s.show : ""}`}>
            <li className={s.catalogMenuItem}>
              <Link href="/catalog/vodogreinye-kotly">Водогрейные котлы</Link>
            </li>
            <li className={s.catalogMenuItem}>
              <Link href="/catalog/parovye-kotly">Паровые котлы</Link>
            </li>
            <li className={s.catalogMenuItem}>
              <Link href="/catalog/na-peregretoy-vode-kotly">
                Котлы на перегретой воде
              </Link>
            </li>
            <li className={s.catalogMenuItem}>
              <Link href="/catalog/na-diatermicheskom-masle-kotly">
                Котлы на диатермическом масле
              </Link>
            </li>
          </ul>
        </li>
        <li className={`${s.listItem} ${isVisible ? s.smallListItem : ""}`}>
          <Link className={s.navLink} href="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
