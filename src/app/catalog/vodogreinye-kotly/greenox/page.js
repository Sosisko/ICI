// Core
import Link from "next/link";

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
                      <li>
                        <Link href="/catalog/vodogreinye-kotly">
                          Водогрейные котлы
                        </Link>
                      </li>
                      <span>/</span>
                      <li>Серия GREENOX</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>Водогрейные котлы GREENOX</h1>
                  <p className={s.productSubtitle}>Расчетное давление 5 бар</p>
                  <p className={s.productSubtitle}>
                    Полезная мощность 109 ÷ 3000 кВт
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 95,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/vodogreinye-kotly/greenox.jpg"
                  alt="Водогрейные котлы GREENOX"
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
              Серия GREENOX – это конденсационные котлы с низкой тепловой
              нагрузкой топочного объема, с топкой с проходящим пламенем, с
              тремя оборотами дымовых газов и омываемым днищем. В зависимости от
              подключаемой горелки котлы могут работать на газу, дизельном
              топливе или мазуте.
            </p>
            <p className={s.descriptionText}>
              Применяются для производства горячей воды температурой от 60 до
              110°C в системах отопления и горячего водоснабжения малой
              мощности.
            </p>
            <p className={s.descriptionText}>
              Водогрейные котлы GREENOX поставляются в двух исполнениях: в
              блочном кожухе (мощность от 109 до 700 кВт) и в корпусе из
              алюминиевых листов (мощность от 800 до 3000 кВт).
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>
              Высокий КПД и большие поверхности теплообмена
            </h3>
            <p className={s.descriptionText}>
              Высокая энергетическая эффективность котлов GREENOX достигается
              благодаря увеличенным поверхностям теплообмена, что обеспечивает
              максимальные значения КПД при любых рабочих нагрузках.
            </p>
            <h3 className={s.descriptionSubtitle}>Низкая тепловая нагрузка</h3>
            <p className={s.descriptionText}>
              Топка с низкой тепловой нагрузкой топочного объема спроектирована
              для наилучшей совместимости с горелками с низким уровнем выброса
              NOx.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Агрегаты GREENOX разработаны в соответствии с самыми строгими
              международными стандартами безопасной эксплуатации.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Простая, быстрая и безопасная установка
            </h3>
            <p className={s.descriptionText}>
              Котел поставляется со всеми необходимыми для установки
              компонентами, полностью собран и испытан в заводских условиях
              перед поставкой.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Высокая надежность в постоянном режиме работы
            </h3>
            <p className={s.descriptionText}>
              Конструктивные характеристики позволяют котлу функционировать при
              высоких нагрузках и в периоды интенсивной работы.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Эксплуатационная неприхотливость
            </h3>
            <p className={s.descriptionText}>
              Благодаря большому объему воды и высокой тепловой инерции котел
              подходит для работы в условиях скачков температуры и давления в
              магистральной сети.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/vodogreinye-kotly/greenox/table.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>

            <ul>
              <li>- Теплоизолированный корпус</li>
              <li>- Турбулизаторы</li>
              <li>- Щетка для чистки</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
