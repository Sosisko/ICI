// Styles
import s from "./CatalogSection.module.css";

const CatalogSection = () => {
  return (
    <section id="catalog" className={s.catalogSection}>
      <h2 className={s.title}>Каталог ICI CALDAIE</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <h3 className={s.itemTitle}>Водогрейные котлы</h3>
          <p className={s.itemText}>
            Генераторы горячей воды, выполненные в дымотрубном, трехвитковом или
            реверсивном типах, характеризуются высоким содержанием воды.
            Мощность этих генераторов удовлетворяет потребности от 2500 до 20000
            кВт.
          </p>
          <img
            className={s.itemImg}
            src="/images/catalog/vodogreinye-kotly.jpg"
          />
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>Паровые котлы</h3>
          <p className={s.itemText}>
            Парогенераторы встроены в дымовую трубу, трехходового или
            реверсивного типа пламени. Все генераторы могут быть объединены с
            системами освобождения арендаторов на срок до 72 часов (GSS).
            Мощность подачи пара составляет от 50 до 32000 кг/ч.
          </p>
          <img className={s.itemImg} src="/images/catalog/parovye-kotly.jpg" />
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>Котлы на перегретой воде</h3>
          <p className={s.itemText}>
            Генераторы перегретой воды встроенные в дымовую трубу, трехходового
            и реверсивного типа, предназначены для отопительных или
            технологических систем с рабочей температурой выше 110°С. Мощность
            этих генераторов удовлетворяет потребности от 200 до 17000 кВт.
          </p>
          <img
            className={s.itemImg}
            src="/images/catalog/na-peregretoy-vode-kotly.jpg"
          />
        </li>
        <li className={s.item}>
          <h3 className={s.itemTitle}>Котлы на диатермическом масле</h3>
          <p className={s.itemText}>
            Теплогенераторы на диатермическом масле ICI Caldaie выполнены по
            трехходовому типу, с низкими тепловыми нагрузками и высокими
            скоростями масла для исключения риска растрескивания самого масла.
          </p>
          <img className={s.itemImg} src="/images/catalog/na-masle-kotly.jpg" />
        </li>
      </ul>
    </section>
  );
};

export default CatalogSection;
