"use client";

// Core
import { useEffect, useState } from "react";

// Components
import NavBar from "./NavBar/NavBar";

// Style
import s from "./Header.module.css";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 400) {
        setIsSticky(true);
        setIsHidden(false);
        setIsVisible(true);
      } else if (scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
        setIsSticky(false);
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("isVisible", isVisible);

  return (
    <header
      className={`${s.header} ${isSticky ? s.sticky : ""} ${
        isHidden ? s.hidden : ""
      }`}
    >
      <div className="container">
        <div className={s.headerContent}>
          <img
            className={`${s.logo} ${isVisible ? s.smallLogo : ""}`}
            src="/images/logo.png"
            alt="Logo"
          />
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
