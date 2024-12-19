"use client";
// Core
import { useState, useRef } from "react";
import Link from "next/link";

// Style
import s from "./NavBar.module.css";

function NavBar({ isVisible, isSticky }) {
  const [showCatalogMenu, setShowCatalogMenu] = useState(false);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
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
    <>
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
            className={`${s.listItem} ${s.catalogLink} ${
              isVisible ? s.smallListItem : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Каталог
            <span className={s.caret}></span>
            <ul
              className={`${s.catalogMenu} ${showCatalogMenu ? s.show : ""} ${
                isSticky ? s.smallTop : ""
              }`}
            >
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

      <div
        className={`${s.burger} ${isOpenBurgerMenu ? s.open : ""}`}
        onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
      >
        <div className={s.burgerLine}></div>
      </div>

      <nav
        className={`${s.navMobile} ${isOpenBurgerMenu ? s.showNavMobile : ""}`}
      >
        <ul className={s.burgerList}>
          <li className={s.burgerListItem}>
            <Link href="/" onClick={() => setIsOpenBurgerMenu(false)}>Главная</Link>
          </li>
          <li className={s.burgerListItem}>
            <Link href="/info" onClick={() => setIsOpenBurgerMenu(false)}>О производстве</Link>
          </li>
          <li className={s.burgerListItem}>
            <Link href="/catalog" onClick={() => setIsOpenBurgerMenu(false)}>Каталог</Link>
            <ul className={s.burgerCatalogMenu}>
              <li className={s.burgerListItem}>
                <Link href="/catalog/vodogreinye-kotly" onClick={() => setIsOpenBurgerMenu(false)}>Водогрейные котлы</Link>
              </li>
              <li className={s.burgerListItem}>
                <Link href="/catalog/parovye-kotly" onClick={() => setIsOpenBurgerMenu(false)}>Паровые котлы</Link>
              </li>
              <li className={s.burgerListItem}>
                <Link href="/catalog/na-peregretoy-vode-kotly" onClick={() => setIsOpenBurgerMenu(false)}>Котлы на перегретой воде</Link>
              </li>
              <li className={s.burgerListItem}>
                <Link href="/catalog/na-diatermicheskom-masle-kotly" onClick={() => setIsOpenBurgerMenu(false)}>Котлы на диатермическом масле</Link>
              </li>
            </ul>
          </li>
          <li className={s.burgerListItem}>
            <Link href="/contacts" onClick={() => setIsOpenBurgerMenu(false)}>Контакты</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
