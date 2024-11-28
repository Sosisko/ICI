"use client";
// Styles
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.logo}>
            <img src="/images/logofooter.png" alt="Logo" />
          </div>
          <div className={s.footerCatalog}>
            <h2 className={s.title}>Каталог</h2>
            <ul>
              <li>
                <a href="/catalog/vodogreinye-kotly">Водогрейные котлы</a>
              </li>
              <li>
                <a href="/catalog/parovye-kotly">Паровые котлы</a>
              </li>
              <li>
                <a href="/catalog/na-peregretoy-vode-kotly">Котлы на перегретой воде</a>
              </li>
              <li>
                <a href="/catalog/na-diatermicheskom-masle-kotly">Котлы на диатермическом масле</a>
              </li>
            </ul>
          </div>
          <div className={s.footerContacts}>
            <h2 className={s.title}>Контакты</h2>
            <ul>
              <li className={s.footerContactsItem}>
                <img src="/images/footer/phone.png" alt="phone" />
                <a href="tel:+78121234567">+7 (812) 123-45-67</a>
              </li>
              <li className={s.footerContactsItem}>
                <img src="/images/footer/mail.png" alt="phone" />
                <a href="mailto:google@gmail.com">google@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
