"use client";
// Core
import Link from "next/link";

// Components
import Footer from "../../components/Footer/Footer";

// Styles
import s from "../catalog.module.css";

function hotWaterBoilers() {
  return (
    <>
      <section className={s.hotWaterBoilers}>
        <div className={s.wrapper}>
          <div className={s.textBlock}>
            <div className={s.text}>
              <h1 className={s.title}>
                Водогрейные котлы <br /> ICI CALDAIE
              </h1>
              <p className={s.subtitle}>
                Котлы серий REX / REX F, TNX / TNX EN, TNOX / TNOX EN
              </p>
              <p>Мощностью от 70 кВт до 20000 кВт</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.catalogSection}>
        <div className="container">
          <ul className={s.list}>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/vodogreinye-kotly/rex">
                  <h3 className={s.itemTitle}>Серия REX / REX F</h3>
                </Link>
                <p>Расчетное давление 5 или 6 бар</p>
                <p>Полезная мощность 70 ÷ 6000 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly/rex">
                <img
                  className={s.itemImg}
                  src="/images/catalog/vodogreinye-kotly/rex.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/vodogreinye-kotly/rexdual">
                  <h3 className={s.itemTitle}>Серия REX DUAL</h3>
                </Link>
                <p>Расчетное давление 5 бар</p>
                <p>Полезная мощность 80 ÷ 2600 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly/rexdual">
                <img
                  className={s.itemImg}
                  src="/images/catalog/vodogreinye-kotly/rex-dual.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/vodogreinye-kotly/greenox">
                  <h3 className={s.itemTitle}>Серия GREENOX</h3>
                </Link>
                <p>Расчетное давление 5 бар</p>
                <p>Полезная мощность 109 ÷ 3000 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly/greenox">
                <img
                  className={s.itemImg}
                  src="/images/catalog/vodogreinye-kotly/greenox.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/vodogreinye-kotly/tnx">
                  <h3 className={s.itemTitle}>Серия TNX / TNX EN</h3>
                </Link>
                <p>Расчетное давление 6 бар</p>
                <p>Полезная мощность 3000 ÷ 20000 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly/tnx">
                <img
                  className={s.itemImg}
                  src="/images/catalog/vodogreinye-kotly/TNOX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/vodogreinye-kotly/tnox">
                  <h3 className={s.itemTitle}>Серия TNOX / TNOX EN</h3>
                </Link>
                <p>Расчетное давление 6 бар</p>
                <p>Полезная мощность 2500 ÷ 25000 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly/tnox">
                <img
                  className={s.itemImg}
                  src="/images/catalog/vodogreinye-kotly/TNOX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/vodogreinye-kotly/tnoxe">
                  <h3 className={s.itemTitle}>Серия TNOX.e / TNOX.e EN</h3>
                </Link>
                <p>Расчетное давление 6 бар</p>
                <p>Полезная мощность 2500 ÷ 17000 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly/tnoxe">
                <img
                  className={s.itemImg}
                  src="/images/catalog/vodogreinye-kotly/TNOX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/vodogreinye-kotly/tnoxbt">
                  <h3 className={s.itemTitle}>Серия TNOX BT COND</h3>
                </Link>
                <p>Расчетное давление 6 бар</p>
                <p>Полезная мощность 3000 ÷ 7000 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly/tnoxbt">
                <img
                  className={s.itemImg}
                  src="/images/catalog/vodogreinye-kotly/TNOXCOND.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/vodogreinye-kotly/tnoxs">
                  <h3 className={s.itemTitle}>Серия TNOX S</h3>
                </Link>
                <p>Расчетное давление 3 бар</p>
                <p>Полезная мощность 1200 ÷ 14000 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly/tnoxs">
                <img
                  className={s.itemImg}
                  src="/images/catalog/vodogreinye-kotly/TNOX.jpg"
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

export default hotWaterBoilers;
