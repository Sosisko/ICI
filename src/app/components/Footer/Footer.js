"use client";
// Styles
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.logo}>
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className={s.footerCatalog}>
            <h2 className={s.title}>Каталог</h2>
            <ul>
              <li>
                <a href="#">Водогрейные котлы</a>
              </li>
              <li>
                <a href="#">Паровые котлы</a>
              </li>
              <li>
                <a href="#">Котлы на перегретой воде</a>
              </li>
              <li>
                <a href="#">Котлы на диатермическом масле</a>
              </li>
            </ul>
          </div>
          <div className={s.footerContacts}>
            <h2 className={s.title}>Контакты</h2>
            <ul>
              <li className={s.footerContactsItem}>
                <img src="/images/footer/phone.png" alt="phone" />
                <a href="#">+7 (812) 123-45-67</a>
              </li>
              <li className={s.footerContactsItem}>
                <img src="/images/footer/mail.png" alt="phone" />
                <a href="#">google@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
