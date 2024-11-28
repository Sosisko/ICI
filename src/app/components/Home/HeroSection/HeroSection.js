"use client";
// Core
import { useRouter } from "next/navigation";

// Styles
import s from "./HeroSection.module.css";

const HeroSection = () => {
  const router = useRouter();
  const toCatalogHandler = () => {
    router.push("/catalog");
  };

  return (
    <section className={s.heroSection}>
      <div className={s.wrapper}>
        <div className={s.textBlock}>
          <h1 className={s.title}>
            Официальный дилер котельного оборудования ICI CALDAIE в России
          </h1>
          <p className={s.subTitle}>
            Отопительные решения, проверенные временем и опытом
          </p>
          <button onClick={toCatalogHandler}>Перейти в каталог</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
