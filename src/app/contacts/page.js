"use client";
// Core
import { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Controller, set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "@mona-health/react-input-mask";
import { RiseLoader } from "react-spinners";
// Components
import Footer from "../components/Footer/Footer";

// Styles
import s from "./contacts.module.css";

function contactsPage() {
  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useRef();
  const schema = yup.object({
    name: yup.string().required("Введите имя"),
    phone: yup
      .string()
      .required("Введите номер телефона")
      .min(16, "Слишком короткий номер"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setIsLoading(true);
    setDisabled(true);
    reset();

    emailjs
      .sendForm("service_o6d29x3", "template_wov24fo", form.current, {
        publicKey: "40NDy3hPxsnea-Fcd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDisabled(false);
          setIsLoading(false);
          setIsSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setDisabled(false);
          setIsLoading(false);
          setIsSuccess(false);
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
              <h2>Напишите или позвоните нам</h2>
              <div className={s.contactServiceList}>
                <div className={s.contactServiceItem}>
                  <img
                    className={s.contactIcon}
                    src="/images/contacts/phone.png"
                    alt="phone"
                  />
                  <h3>Телефон</h3>
                  <a href="tel:+7 (982) 600-82-47">+7 (982) 600-82-47</a>
                </div>
                <div className={s.contactServiceItem}>
                  <img
                    className={s.contactIcon}
                    src="/images/contacts/email.png"
                    alt="mail"
                  />
                  <h3>Почта</h3>
                  <a href="mailto:ici-rus@mail.ru">ici-rus@mail.ru</a>
                </div>
              </div>
            </div>
            <div className={s.contactServicesRight}>
              <h2>Или отправьте ваш вопрос</h2>
              <form
                className={s.form}
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={s.fieldWrapper}>
                  <input
                    className={`${s.input} ${errors.name ? s.inputError : ""}`}
                    type="text"
                    {...register("name")}
                    placeholder="Ваше имя *"
                  />
                  <p className={s.error}>{errors.name?.message}</p>
                </div>

                <div className={s.fieldWrapper}>
                  <Controller
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <InputMask
                        {...field}
                        mask="+7(999)999-99-99"
                        placeholder="+7(___)___-__-__ *"
                        onBlur={field.onBlur}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                        value={field.value || ""}
                        maskPlaceholder={null}
                      >
                        <input
                          className={`${s.input} ${
                            errors.phone ? s.inputError : ""
                          }`}
                          value={field.value || ""}
                        />
                      </InputMask>
                    )}
                  />
                  <p className={s.error}>{errors.phone?.message}</p>
                </div>

                <div className={s.fieldWrapper}>
                  <input
                    className={s.input}
                    type="email"
                    {...register("email")}
                    placeholder="Ваша почта "
                  />
                  <p className={s.error}>{errors.email?.message}</p>
                </div>

                <div className={s.fieldWrapper}>
                  <textarea
                    style={{ maxWidth: "600px", height: "100px" }}
                    className={s.input}
                    name="message"
                    placeholder="Ваш вопрос"
                  />
                </div>
                {isLoading ? (
                  <RiseLoader color="#02b3f9" className={s.loader} />
                ) : isSuccess ? (
                  <div className={s.successMessage}>
                    <p>Успешно отправлено!</p>
                    <button
                      type="button"
                      className={s.closeButton}
                      onClick={() => setIsSuccess(false)}
                    >
                      ок
                    </button>
                  </div>
                ) : (
                  <input
                    disabled={disabled}
                    className={s.submitButton}
                    type="submit"
                  />
                )}
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
