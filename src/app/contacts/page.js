"use client";
// Core
import Link from "next/link";

// Components
import Footer from "../components/Footer/Footer";

// Styles
import s from "./contacts.module.css";

function contactsPage() {
  return (
    <>
      <section className={s.contactsPage}>
        <div className={s.wrapper}>
          <div className={s.textBlock}>
            <div className={s.breadcrumbs}>
              <ul>
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <span>/</span>
                <li>Контакты</li>
              </ul>
            </div>
            <div className={s.text}>
              <h1 className={s.title}>КОНТАКТЫ</h1>
              <p className={s.subtitle}>
                Обратитесь к нам по номеру телефона или отправьте запрос на
                почту для получения более подробной информации о сертификатах,
                характеристиках, стоимости, наличии на складе и сроках поставки
                оборудования ICI CALDAIE.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.contactsSection}>
        <div className="container">
          <div className={s.contactsServices}>
            <div className={s.contactServiceItem}>
              <img
                className={s.contactIcon}
                src="/images/contacts/phone.png"
                alt="phone"
              />
              <h3>Телефон</h3>
              <a href="tel:+7 (495) 123-45-67">+7 (495) 123-45-67</a>
            </div>
            <div className={s.contactServiceItem}>
              <img
                className={s.contactIcon}
                src="/images/contacts/email.png"
                alt="mail"
              />
              <h3>Почта</h3>
              <a href="mailto:gZ9Yy@example.com">gZ9Yy@example.com</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default contactsPage;
