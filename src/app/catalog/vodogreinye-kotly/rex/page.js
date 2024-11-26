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
                      <li>Серия REX и REX F</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>
                    Водогрейные котлы REX и REX F
                  </h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 5 или 6 бар
                  </p>
                  <p className={s.productSubtitle}>
                    Полезная мощность 70 ÷ 6000 кВт
                  </p>
                  <p className={s.productSubtitle}>КПД до 95,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/vodogreinye-kotly/rex.jpg"
                  alt="Водогрейные котлы REX и REX F"
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
              Водогрейный газотрубный котел с реверсивным развитием факела в
              топке. Топка цилиндрической формы, имеющая выпуклое днище,
              поддерживаемая полностью омываемым патрубком. Предназначен для
              работы с жидкотопливными и газовыми наддувными горелками.
              Предназначен для использования в отопительных системах с
              температурой воды от 60 до 110 °C. В отдельную группу выделена
              модификация REX F с повышенным КПД (до 95%) для работы на газовом
              топливе. Котлы REX F обеспечивают наибольшую экономию топлива за
              счет увеличения теплоотдачи. Дополнительным элементом конструкции
              модификаций REX F является запатентованная система Fin-e
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>
              Высокотехнологичное управление
            </h3>
            <p className={s.descriptionText}>
              Управление генератором может быть выполнено посредством
              программируемого логического контроллера, полностью совместимого с
              любой системой сбора данных, что позволяет отображать и
              настраивать рабочие параметры.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Максимальная эксплуатационная гибкость
            </h3>
            <p className={s.descriptionText}>
              Благодаря большому объему воды и высокой теплоемкости котел
              применим для работы в любых условиях эксплуатации.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Эффективность при любых условиях
            </h3>
            <p className={s.descriptionText}>
              Комплексные решения для повышения энергетической эффективности на
              основе применения систем рекуперации тепла дымовых газов,
              специально разработанных и встроенных в котел.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Простая, быстрая и безопасная установка
            </h3>
            <p className={s.descriptionText}>
              Простая установка генератора, необходимо выполнить только
              подключение электрической и гидравлической линий, а также к линии
              подачи пара и дренажа.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Генератор был разработан в соответствии с самыми строгими
              международными нормами по технике безопасности.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Повышенная энергоэффективность (для REX F)
            </h3>
            <p className={s.descriptionText}>
              Встроенное инновационное решение для рекуперации дымовых газов,
              существенно увеличивающее КПД котлов и сокращающее объем выброса
              CO2 в атмосферу.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/vodogreinye-kotly/rex/table.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>
            <p className={s.descriptionText}>
              Котлы серий REX и REX F поставляются полностью готовыми к
              эксплуатации.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Комплект поставки для моделей мощностью 70-3500 кВт
            </h3>
            <ul>
              <li>- Блочный теплоизолированный корпус</li>
              <li>- Турбулизаторы</li>
              <li>- Щетка для чистки</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Для моделей мощностью 4000-6000 кВт
            </h3>
            <h4>Приборы для контроля давления:</h4>
            <ul>
              <li>
                - Манометр с большим циферблатом с трехходовым испытательным
                краном
              </li>
            </ul>
            <h4>Приборы для контроля температуры:</h4>
            <ul>
              <li>- Термометр с большим циферблатом, шкала 0-120°C</li>
              <li>
                - Предохранительный термостат высокой температуры с ручной
                перезарядкой (110°C)
              </li>
              <li>- Термопара РТ100</li>
              <li>
                - Предохранительный термостат с ручной перезарядкой (110°C)
                сертифицирован INAIL
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
