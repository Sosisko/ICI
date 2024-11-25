// Components
import Footer from "../../../components/Footer/Footer";

// Style
import s from "../../catalog.module.css";

const rex = () => {
  return (
    <>
      <section className={s.productBannerSection}>
        <div className={s.productWrapper}>
          <div className="container">
            <div className={s.productContent}>
              <div className={s.productTextBlock}>
                <div className={s.text}>
                  <h1 className={s.productTitle}>
                    Котлы на диатермическом масле (ВОТ) EVX
                  </h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 12, 15 бар
                  </p>
                  <p className={s.productSubtitle}>Мощность 233 ÷ 10465 кВт</p>
                  <p className={s.productSubtitle}>
                    Паропроизводительность 341 ÷ 15300 кг/ч
                  </p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/na-diatermicheskom-masle-kotly/evx.jpg"
                  alt="Котлы на диатермическом масле (ВОТ) EVX"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.description}>
        <div className="container">
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Описание</h2>
            <p className={s.descriptionText}>
              Парогенераторы серии EVX – котлы горизонтального типа, выработка
              пара в которых осуществляется за счет нагрева диатермической
              жидкости, циркулирующей внутри змеевика из высококачественной
              нержавеющей стали. За счет работы с большим объемом воды
              парогенераторы EVX обладают высокой паропроизводительностью и
              могут быть задействованы в процессах с высоким потреблением пара.
            </p>
          </div>

          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/na-diatermicheskom-masle-kotly/evx/table.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>
            <h3 className={s.descriptionSubtitle}>Группа паровой арматуры</h3>
            <ul>
              <li>- Клапан отбора пара проходной</li>
              <li>- 2 предохранительных пружинных клапана</li>
              <li>- 2 индикатора уровня прямого действия</li>
              <li>- 2 группы отсечных кранов и дренаж индикатора</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>Группа продувки включает</h3>
            <ul>
              <li>- Отсечной клапан продувки проходной</li>
              <li>- Клапан быстрого дренажа с наружной резьбой с рукояткой</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Группа подачи питательной воды, установленная на основании
            </h3>
            <ul>
              <li>
                - 1 центробежный вертикальный многоступенчатый электронасос для
                воды 120°C электронасос для воды 120°C
              </li>
              <li>- 1 отсечной клапан подачи питательной воды</li>
              <li>- 1 фильтр насоса</li>
              <li>- 2 обратных клапана</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Инструментальная рампа контроля давления
            </h3>
            <ul>
              <li>
                - Манометр с большим циферблатом с трехходовым испытательным
                краном
              </li>
              <li>- Ограничительное реле давления</li>
              <li>- Предохранительное реле давления с ручной перезарядкой</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Автоматический регулятор уровня с датчиками проводимости
            </h3>
            <ul>
              <li>- Датчик пуска насоса</li>
              <li>- Датчик останова насоса</li>
              <li>- Датчик низкого уровня</li>
            </ul>

            <h4>Электрический шкаф управления котлом</h4>
            <p>защита IP55 400 V/3 + N/50 Гц</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
