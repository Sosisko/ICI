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
      <section className={s.steamBoilers}>
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
                <li>Паровые котлы</li>
              </ul>
            </div>
            <div className={s.text}>
              <h1 className={s.title}>
                Паровые котлы <br /> ICI CALDAIE
              </h1>
              <p className={s.subtitle}>
                Котлы серий BX, BNX, FX, SIXEN, GX, WHB
              </p>
              <p>Производительностью 50 - 250000 кг/ч</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.catalogSection}>
        <div className="container">
          <ul className={s.list}>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/bx">
                  <h3 className={s.itemTitle}>Серия BX</h3>
                </Link>
                <p>Расчетное давление 0,7 бар</p>
                <p>Полезная мощность 100 ÷ 3000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/bx">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/BX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/bnx">
                  <h3 className={s.itemTitle}>Серия BNX</h3>
                </Link>
                <p>Расчетное давление 0,7 бар</p>
                <p>Полезная мощность 100 ÷ 3000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/bnx">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/BNX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/fx">
                  <h3 className={s.itemTitle}>Серия FX / FX DUAL</h3>
                </Link>
                <p>Расчетное давление 5 бар</p>
                <p>Полезная мощность 50 ÷ 300 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/fx">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/FX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/sixen">
                  <h3 className={s.itemTitle}>Серия SIXEN</h3>
                </Link>
                <p>Расчетное давление 3 - 25 бар</p>
                <p>Полезная мощность 350 ÷ 5000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/sixen">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/SIXEN.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/gsx">
                  <h3 className={s.itemTitle}>Серия GSX</h3>
                </Link>
                <p>Расчетное давление 3 - 25 бар</p>
                <p>Полезная мощность 350 ÷ 6000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/gsx">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/GSX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/gsxp">
                  <h3 className={s.itemTitle}>Серия GSX P</h3>
                </Link>
                <p>Расчетное давление 3 - 25 бар</p>
                <p>Полезная мощность 500 ÷ 6000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/gsxp">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/GSX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/gx">
                  <h3 className={s.itemTitle}>Серия GX</h3>
                </Link>
                <p>Расчетное давление 3 - 25 бар</p>
                <p>Полезная мощность 1700 ÷ 25000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/gx">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/GX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/gxs">
                  <h3 className={s.itemTitle}>Серия GX S</h3>
                </Link>
                <p>Расчетное давление 12, 15 бар</p>
                <p>Полезная мощность 1700 ÷ 25000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/gxs">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/GXS.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/gxc">
                  <h3 className={s.itemTitle}>Серия GX C</h3>
                </Link>
                <p>Расчетное давление 12, 15 бар</p>
                <p>Полезная мощность 100 ÷ 25000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/gxc">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/GXC.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="/catalog/parovye-kotly/whb">
                  <h3 className={s.itemTitle}>Серия WHB</h3>
                </Link>
                <p>Расчетное давление 3 - 25 бар</p>
                <p>Полезная мощность 50 ÷ 32000 кг/ч</p>
              </div>
              <Link href="/catalog/parovye-kotly/whb">
                <img
                  className={s.itemImg}
                  src="/images/catalog/parovye-kotly/WHB.jpg"
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
