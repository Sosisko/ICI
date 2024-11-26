"use client";
// Core
import Link from "next/link";

// Components
import Footer from "../../components/Footer/Footer";

// Styles
import s from "../catalog.module.css";

function steamBoilers() {
  return (
    <>
      <section className={s.superheatedWaterBoilers}>
        <div className={s.wrapper}>
          <div className={s.textBlock}>
            <div className={s.breadcrumbs}>
              <ul>
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <span>/</span>
                <li>
                  <Link href="/catalog">Каталог</Link>
                </li>
                <span>/</span>
                <li>Котлы на перегретой воде</li>
              </ul>
            </div>
            <div className={s.text}>
              <h1 className={s.title}>
                Котлы на перегретой воде <br /> ICI CALDAIE
              </h1>
              <p className={s.subtitle}>Котлы серий ASX, ASGX EN</p>
              <p>Производительностью 170 - 17000 кВт</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.catalogSection}>
        <div className="container">
          <ul className={s.list}>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/na-peregretoy-vode-kotly/asx">
                  <h3 className={s.itemTitle}>Серия ASX</h3>
                </Link>
                <p>Расчетное давление 5, 12 бар</p>
                <p>Полезная мощность 233 ÷ 3488 кВт</p>
              </div>
              <Link href="/catalog/na-peregretoy-vode-kotly/asx">
                <img
                  className={s.itemImg}
                  src="/images/catalog/na-peregretoy-vode-kotly/ASX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/na-peregretoy-vode-kotly/asgx">
                  <h3 className={s.itemTitle}>Серия ASGX EN</h3>
                </Link>
                <p>Расчетное давление 12 бар</p>
                <p>Полезная мощность 3000 ÷ 17000 кВт</p>
              </div>
              <Link href="/catalog/na-peregretoy-vode-kotly/asgx">
                <img
                  className={s.itemImg}
                  src="/images/catalog/na-peregretoy-vode-kotly/ASGX.jpg"
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default steamBoilers;
