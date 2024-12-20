"use client";
// Core
import Link from "next/link";

// Styles
import s from "./CatalogSection.module.css";

const CatalogSection = () => {
  return (
    <section id="catalog" className={s.catalogSection}>
      <h2 className={s.title}>Каталог ICI CALDAIE</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href="/catalog/vodogreinye-kotly">
            <div className={s.itemText}>
              <h3 className={s.itemTitle}>Водогрейные котлы</h3>
              <p className={s.itemSubtitle}>
                Генераторы горячей воды, выполненные в дымотрубном, трехвитковом
                или реверсивном типах, характеризуются высоким содержанием воды.
              </p>
            </div>
            <img
              className={s.itemImg}
              src="/images/catalog/vodogreinye-kotly.webp"
              alt="Водогрейные котлы ICI CALDAIE"
            />
          </Link>
        </li>
        <li className={s.item}>
          <Link href="/catalog/parovye-kotly">
            <div className={s.itemText}>
              <h3 className={s.itemTitle}>Паровые котлы</h3>
              <p className={s.itemSubtitle}>
                Горизонтальные и модульные модели производительностью 50 – 25000
                кг/ч и давлением пара от 0,2 до 25 бар.
              </p>
            </div>
            <img
              className={s.itemImg}
              src="/images/catalog/parovye-kotly.webp"
              alt="Паровые котлы ICI CALDAIE"
            />
          </Link>
        </li>
        <li className={s.item}>
          <Link href="/catalog/na-peregretoy-vode-kotly">
            <div className={s.itemText}>
              <h3 className={s.itemTitle}>Котлы на перегретой воде</h3>
              <p className={s.itemSubtitle}>
                Генераторы перегретой воды, трехходового и реверсивного типа,
                предназначены для отопительных или технологических систем с
                рабочей температурой выше 110°С.
              </p>
            </div>
            <img
              className={s.itemImg}
              src="/images/catalog/na-peregretoy-vode-kotly.webp"
              alt="Котлы на перегретой воде ICI CALDAIE"
            />
          </Link>
        </li>
        <li className={s.item}>
          <Link href="/catalog/na-diatermicheskom-masle-kotly">
            <div className={s.itemText}>
              <h3 className={s.itemTitle}>Котлы на диатермическом масле</h3>
              <p className={s.itemSubtitle}>
                Термомасляные котлы серии OPX мощностью 116 – 9302 кВт расчетным
                давлением до 10 бар.
              </p>
            </div>
            <img
              className={s.itemImg}
              src="/images/catalog/na-masle-kotly.webp"
              alt="Котлы на диатермическом масле ICI CALDAIE"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default CatalogSection;
