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
                      <li>Серия TNX / TNX EN</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>
                    Водогрейные котлы TNX / TNX EN
                  </h1>
                  <p className={s.productSubtitle}>Расчетное давление 6 бар</p>
                  <p className={s.productSubtitle}>
                    Полезная мощность 3000 ÷ 7000 кВт
                  </p>
                  <p className={s.productSubtitle}>КПД 92 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/vodogreinye-kotly/TNOX.jpg"
                  alt="Водогрейные котлы TNX / TNX EN"
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
              Стальной трехходовой жаротрубный водогрейный котел с омываемым
              днищем топки. Предназначен для работы в автоматическом режиме с
              наддувными горелками на жидком или газообразном топливе.
              Используется для работы в больших отопительных системах мощностью
              от 3000 до 7000 кВт и рабочей температурой от 60 до 110°C
              (предохранительный термостат настроен на 115°C). Доступны модели
              котлов с расчетным давлением до 25 бар. Отвечает требованиям
              европейского норматива EN 303 и попадает под исключения из
              директивы PED.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>
              Максимальная эксплуатационная гибкость
            </h3>
            <p className={s.descriptionText}>
              Благодаря большому объему воды и высокой теплоемкости котел
              применим для работы в любых условиях эксплуатации.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Высокий КПД и большие поверхности теплообмена
            </h3>
            <p className={s.descriptionText}>
              Высокая энергоэффективность благодаря большим поверхностям
              теплообмена, гарантирующим максимальные значения КПД при любых
              рабочих нагрузках.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Эффективность при любых условиях
            </h3>
            <p className={s.descriptionText}>
              Комплексные решения для повышения энергетической эффективности на
              основе применения систем рекуперации тепла дымовых газов,
              специально разработанных и встроенных в котел.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Генератор был разработан в соответствии с самыми строгими
              международными нормами по технике безопасности.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Конфигурируемый в зависимости от запроса
            </h3>
            <p className={s.descriptionText}>
              Имеется широкий ассортимент дополнительного оборудования для
              настройки изделия в зависимости от конкретной цели и задачи
            </p>
            <h3 className={s.descriptionSubtitle}>
              Надежность и долговечность
            </h3>
            <p className={s.descriptionText}>
              Максимальная надежность и долговечность гарантированы особой
              конструкцией, обеспечивающей низкие теплопотери.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/vodogreinye-kotly/tnx/table.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>
            <h3 className={s.descriptionSubtitle}>
              Приборы для контроля давления
            </h3>
            <ul>
              <li>
                - Манометр с большим циферблатом с трехходовым испытательным
                краном
              </li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Приборы для контроля температуры
            </h3>

            <ul>
              <li>- Термометр с большим циферблатом, шкала 0-120°C</li>
              <li>- Регулирующий термостат (110°C)</li>
              <li>
                - Предохранительный термостат высокой температуры с ручной
                перезарядкой (110°C)
              </li>
              <li>- Термопара РТ100</li>
            </ul>
            <h4>Группа продувки с проходным отсечным клапаном</h4>
            <h4> Электрический шкаф управления котлом</h4>
            <h3>защита IP55 400 V/3 + N/50 Гц</h3>
            <h4>Предохранительный термостат с ручной перезарядкой (110°C)</h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
