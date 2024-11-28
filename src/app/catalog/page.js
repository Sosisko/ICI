"use client";
// Core
import Link from "next/link";

// Components
import CatalogSection from "../components/Home/Catalog/CatalogSection";
import Footer from "../components/Footer/Footer";

// Styles
import s from "./catalog.module.css";

function infoPage() {
  return (
    <>
      <section className={s.catalogPage}>
        <div className={s.catalogWrapper}>
          <div className={s.textBlock}>
            <div className={s.breadcrumbs}>
              <ul>
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <span>/</span>
                <li>Каталог</li>
              </ul>
            </div>
            <div className={s.text}>
              <h1 className={s.title}>
                Каталог котельного <br/> оборудования ICI CALDAIE
              </h1>
              <p className={s.subtitle}>
                Сердце, которое уже более 60 лет бьется в своем стремлении к
                будущему.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CatalogSection />

      <Footer />
    </>
  );
}

export default infoPage;
