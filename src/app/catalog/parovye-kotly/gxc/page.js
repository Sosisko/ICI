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
                        <Link href="/catalog/parovye-kotly">Паровые котлы</Link>
                      </li>
                      <span>/</span>
                      <li>Серия GX C</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>Паровые котлы GX C</h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 12, 15 бар
                  </p>
                  <p className={s.productSubtitle}>
                    Паропроизводительность 100 ÷ 25000 кг/ч
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 90,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/parovye-kotly/GXC.jpg"
                  alt="Паровые котлы GX"
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
              Котлы-утилизаторы GX C представляют собой инновационные
              универсальные парогенераторы, способные вырабатывать пар как за
              счет сжигания топлива (подобно обычным паровым котлам), так и за
              счет рекуперации (утилизации) тепла горячих дымовых газов из
              внешних источников. При этом переработке тепла из внешних
              источников, получаемых как побочный продукт какого-либо
              технологического процесса отдается приоритет. Работа котла в
              обычном режиме – решение для резервных случаев или для увеличения
              недостающей мощности, получаемой от утилизации.
            </p>
            <p className={s.descriptionText}>
              Котлы-утилизацторы GX C удобны в экспулатации. Секция рекуперации
              полностью отделена от секции сжигания. Обе секции окружены единым
              водяным объемом. Передние дверцы прикреплены к корпусу котла при
              помощи петель с двойным шарниром, благодаря которым открытие и
              осмотр не требуют демонтажа горелки. Для повышения
              энергоэффективности утилизаторы GX C могут комплектоваться
              экономайзерами, увеличивающими КПД установок с 90 до 95%.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Модульная конструкция</h3>
            <p className={s.descriptionText}>
              Для заказа доступны три варианта с одной и двумя секциями прохода
              дымовых газов с различным расположением секции рекуперации и
              характеристиками получаемого пара (насыщенный или перегретый)
            </p>
            <h3 className={s.descriptionSubtitle}>Компактное решение</h3>
            <p className={s.descriptionText}>
              Серия GX C – одно из лучших конструктивных решений, сочетающих в
              себе парогенератор, способный работать как на обычном топливе, так
              и на отработанных газах.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Высокая заводская готовность
            </h3>
            <p className={s.descriptionText}>
              Котлы собираются и тестируются перед отправкой и доставляются в
              полной готовности к подключению и эксплуатации. При необходимости
              возможна поставка в сборе с дополнительным оборудованием:
              экономайзером, блоком сбора конденсата, деаэратором и т.д.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Компенсация теплового расширения
            </h3>
            <p className={s.descriptionText}>
              Обеспечивается в любых условиях работы за счет горячей
              развальцовки трубных решеток и применения гофрированной топки.
            </p>
            <h3 className={s.descriptionSubtitle}>Гибкая система управления</h3>
            <p className={s.descriptionText}>
              Котлы могут быть включены в текущую систему индикации и управления
              оборудованием котельной.
            </p>
            <h3 className={s.descriptionSubtitle}>Простота обслуживания</h3>
            <p className={s.descriptionText}>
              Основные узлы котлов-утилизаторов имеют продуманную компоновку с
              быстрым доступом для осмотра, обслуживания и ремонта.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>

            <h3 className={s.descriptionSubtitle}>Группа паровой арматуры</h3>
            <ul>
              <li>- Клапан отбора пара проходной</li>
              <li>- 2 предохранительных пружинных клапана</li>
              <li>- 2 индикатора уровня прямого действия</li>
              <li>- 2 группы отсечных кранов и сливной кран</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Рампа приборов контроля давления
            </h3>
            <ul>
              <li>
                - Манометр с большим циферблатом с трехходовым испытательным
                краном
              </li>
              <li>- Ограничительное реле давления</li>
              <li>
                - Предохранительное реле давления с ручным сбросом в
                соответствии с PED
              </li>
            </ul>

            <h3 className={s.descriptionSubtitle}>Группа продувки днища</h3>
            <ul>
              <li>- Отсечной клапан продувки проходной</li>
              <li>- Клапан быстрого дренажа с наружной резьбой с рукояткой</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Автоматический регулятор уровня с датчиками проводимости
            </h3>
            <ul>
              <li>- Датчики пуска и останова насоса</li>
              <li>
                - Датчик 1-ого и 2-ого сигналов тревоги и блокировки горелки по
                низкому уровню
              </li>
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
