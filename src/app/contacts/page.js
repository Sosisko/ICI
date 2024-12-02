"use client";
// Core
import { useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Footer from "../components/Footer/Footer";

// Styles
import s from "./contacts.module.css";

function contactsPage() {
  const form = useRef();

  const schema = yup.object({
    name: yup.string().required("Введите имя"),
    phone: yup.string().required("Введите номер телефона"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    emailjs
      .sendForm("service_o6d29x3", "template_wov24fo", form.current, {
        publicKey: "40NDy3hPxsnea-Fcd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
            <div className={s.contactServicesLeft}>
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
            <div className={s.contactServicesRight}>
              <form
                className={s.form}
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={s.fieldWrapper}>
                  <label className={s.label}>Ваше имя<span>*</span>:</label>
                  <input
                    className={`${s.input} ${errors.name ? s.inputError : ""}`}
                    type="text"
                    {...register("name")}
                  />
                  <p className={s.error}>{errors.name?.message}</p>
                </div>

                <div className={s.fieldWrapper}>
                  <label className={s.label}>Оставьте ваш телефон<span>*</span>:</label>
                  <input
                    type="text"
                    className={`${s.input} ${errors.phone ? s.inputError : ""}`}
                    {...register("phone")}
                  />
                  <p className={s.error}>{errors.phone?.message}</p>
                </div>

                <div className={s.fieldWrapper}>
                  <label className={s.label}>Оставьте вашу почту:</label>
                  <input
                    className={s.input}
                    type="email"
                    {...register("email")}
                  />
                  <p className={s.error}>{errors.email?.message}</p>
                </div>

                <div className={s.fieldWrapper}>
                  <label className={s.label}>Ваш вопрос:</label>
                  <textarea
                    style={{ maxWidth: "600px" }}
                    className={s.input}
                    name="message"
                  />
                </div>

                <input className={s.submitButton} type="submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default contactsPage;
