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
                      <li>Серия BNX</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>Паровые котлы BNX</h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 0,7 бар
                  </p>
                  <p className={s.productSubtitle}>
                    Паропроизводительность 100 ÷ 3000 кг/ч
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 91,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/parovye-kotly/BNX.jpg"
                  alt="Паровые котлы BNX"
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
              Серия паровых котлов BNX – новейшая разработка компании ICI
              Caldaie в области парогенераторов низкого давления. Котлы
              рассчитаны на выработку пара высокого качества даже при рабочем
              давлении ниже 1 бар. В зависимости от выбранной горелки котлы BNX
              могут работать на газу и жидком топливе, включая мазут. Для
              управления работой котла используется интерфейс последнего
              поколения. Компактные габариты парогенератора оптимальны для
              установки в небольших котельных.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Компактные размеры</h3>
            <p className={s.descriptionText}>
              Паровые котлы BNX обладают одними из самых компактных размеров в
              своем классе. Для работы котла не требуется просторных помещений,
              а доступ для обслуживания возможен с правой и с левой стороны.
            </p>
            <h3 className={s.descriptionSubtitle}>Высокое качество пара</h3>
            <p className={s.descriptionText}>
              Устройство парогенераторов BNX предусматривает большую площадь
              поверхности испарения и наличие встроенного сепаратора,
              отсекающего конденсат от подачи. Сухость пара на выходе близка к
              единице.
            </p>
            <h3 className={s.descriptionSubtitle}>Постоянная подача пара</h3>
            <p className={s.descriptionText}>
              Благодаря наличию паровой камеры большого объема парогенератор
              справляется с любыми пиковыми нагрузками при отборе пара.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Надежность и долговечность
            </h3>
            <p className={s.descriptionText}>
              Максимальная надежность и долговечность гарантированы особой
              конструкцией, обеспечивающей низкие теплопотери.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Простой и удобный интерфейс
            </h3>
            <p className={s.descriptionText}>
              Пользовательский интерфейс последнего поколения оснащен интуитивно
              понятной системой оповещения и сигнализации.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img
              src="/images/catalog/parovye-kotly/bnx/table.jpg"
              alt="Паровые котлы BNX"
            />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>

            <h3 className={s.descriptionSubtitle}>
              Рампа приборов контроля давления
            </h3>
            <ul>
              <li>
                - Манометр с большим циферблатом с трехходовым испытательным
                краном
              </li>
              <li>- Ограничительное реле давления</li>
              <li>- Предохранительное реле давления с ручной перезарядкой</li>
              <li>
                - Регулирующее реле давления (только для версии с 2-мя насосами)
              </li>
            </ul>
            <h3 className={s.descriptionSubtitle}>Группа продувки днища</h3>
            <ul>
              <li>- Шаровой дренажный клапан с рукояткой быстрого открытия</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Автоматический регулятор уровня с датчиками проводимости
            </h3>
            <ul>
              <li>- Датчики пуска и останова насоса</li>
              <li>
                - Датчики 1-ого и 2-ого сигналов тревоги и блокировки горелки по
                низкому уровню
              </li>
              <li>- Датчик безопасности по высокому уровню</li>
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
