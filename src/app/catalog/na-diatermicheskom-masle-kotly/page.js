"use client";
// Core
import Link from "next/link";

// Components
import Footer from "../../components/Footer/Footer";

// Styles
import s from "../catalog.module.css";

function thermalOilBoilers() {
  return (
    <>
      <section className={s.thermalOilBoilers}>
        <div className={s.wrapper}>
          <div className={s.textBlock}>
            <div className={s.text}>
              <h1 className={s.title}>
                Котлы на диатермическом масле <br /> ICI CALDAIE
              </h1>
              <p className={s.subtitle}>Котлы серий OPX, OPX REC, EVX</p>
              <p>Производительностью 116 - 10465 кВт</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.catalogSection}>
        <div className="container">
          <ul className={s.list}>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="#">
                  <h3 className={s.itemTitle}>Серия OPX</h3>
                </Link>
                <p>Расчетное давление 10 бар</p>
                <p>Полезная мощность 116 ÷ 9302 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly">
                <img
                  className={s.itemImg}
                  src="/images/catalog/na-diatermicheskom-masle-kotly/OPX.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="#">
                  <h3 className={s.itemTitle}>Серия OPX REC</h3>
                </Link>
                <p>Расчетное давление 10 бар</p>
                <p>Полезная мощность 1163 ÷ 9302 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly">
                <img
                  className={s.itemImg}
                  src="/images/catalog/na-diatermicheskom-masle-kotly/OPXREC.jpg"
                />
              </Link>
            </li>
            <li className={s.item}>
              <div className={s.itemText}>
                <Link href="#">
                  <h3 className={s.itemTitle}>Серия EVX</h3>
                </Link>
                <p>Расчетное давление 12, 15 бар</p>
                <p>Полезная мощность 233 ÷ 10465 кВт</p>
              </div>
              <Link href="/catalog/vodogreinye-kotly">
                <img
                  className={s.itemImg}
                  src="/images/catalog/na-diatermicheskom-masle-kotly/EVX.jpg"
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

export default thermalOilBoilers;
