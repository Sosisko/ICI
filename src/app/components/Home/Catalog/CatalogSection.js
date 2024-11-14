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
          <div className={s.itemText}>
            <Link href="/catalog/vodogreinye-kotly">
              <h3 className={s.itemTitle}>Водогрейные котлы</h3>
            </Link>
            <p className={s.itemSubtitle}>
              Генераторы горячей воды, выполненные в дымотрубном, трехвитковом
              или реверсивном типах, характеризуются высоким содержанием воды.
            </p>
          </div>
          <Link href="/catalog/vodogreinye-kotly">
            <img
              className={s.itemImg}
              src="/images/catalog/vodogreinye-kotly.jpg"
            />
          </Link>
        </li>
        <li className={s.item}>
          <div className={s.itemText}>
            <Link href="/catalog/parovye-kotly">
              <h3 className={s.itemTitle}>Паровые котлы</h3>
            </Link>
            <p className={s.itemSubtitle}>
              Горизонтальные и модульные модели производительностью 50 – 25000
              кг/ч и давлением пара от 0,2 до 25 бар.
            </p>
          </div>
          <Link href="/catalog/parovye-kotly">
            <img
              className={s.itemImg}
              src="/images/catalog/parovye-kotly.jpg"
            />
          </Link>
        </li>
        <li className={s.item}>
          <div className={s.itemText}>
            <Link href="/catalog/na-peregretoy-vode-kotly">
              <h3 className={s.itemTitle}>Котлы на перегретой воде</h3>
            </Link>
            <p className={s.itemSubtitle}>
              Генераторы перегретой воды, трехходового и реверсивного типа,
              предназначены для отопительных или технологических систем с
              рабочей температурой выше 110°С.
            </p>
          </div>
          <Link href="/catalog/na-peregretoy-vode-kotly">
            <img
              className={s.itemImg}
              src="/images/catalog/na-peregretoy-vode-kotly.jpg"
            />
          </Link>
        </li>
        <li className={s.item}>
          <div className={s.itemText}>
            <Link href="/catalog/na-masle-kotly">
              <h3 className={s.itemTitle}>Котлы на диатермическом масле</h3>
            </Link>
            <p className={s.itemSubtitle}>
              Термомасляные котлы серии OPX мощностью 116 – 9302 кВт расчетным
              давлением до 10 бар.
            </p>
          </div>
          <Link href="/catalog/na-masle-kotly">
            <img
              className={s.itemImg}
              src="/images/catalog/na-masle-kotly.jpg"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default CatalogSection;
