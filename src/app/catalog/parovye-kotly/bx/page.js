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
                      <li>Серия BX</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>Паровые котлы BX</h1>
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
                  src="/images/catalog/parovye-kotly/BX.jpg"
                  alt="Паровые котлы BX"
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
              В серии BX и BNX включены моноблочные паровые котлы низкого
              давления (0,7 бар). Это так называемые неподнадзорные
              парогенераторы, широко используемые на пищевых производствах.
              Степень сухости вырабатываемого пара близка к единице даже при
              пиковых нагрузках и длительной безостановочной работе.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Высокое качество пара</h3>
            <p className={s.descriptionText}>
              Устройство котлов BX предусматривает большую площадь поверхности
              испарения и использование встроенного сепаратора, отсекающего
              конденсат от подачи потребителю. Сухость пара на выходе близка к
              единице.
            </p>
            <h3 className={s.descriptionSubtitle}>Энергоэффективность </h3>
            <p className={s.descriptionText}>
              Для повышения энергоэффективности возможна установка
              дополнительного оборудования: группы модуляции питательной воды,
              экономайзера, конденсора и т.п., что позволит повысить общий КПД
              котельной установки.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Серия BX, как и все котлы производства ICI Caldaie, разработаны в
              соответствии с самыми строгими международными нормами техники
              безопасности и отвечают требованиям российских промышленных
              стандартов.
            </p>
            <h3 className={s.descriptionSubtitle}>Постоянная подача</h3>
            <p className={s.descriptionText}>
              Котлы рассчитаны на бесперебойную подачу пара в независимости от
              нагрузки. Выработка нужных объемов осуществляется за счет
              увеличенных размеров паровой камеры.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Совместимость с системами управления
            </h3>
            <p className={s.descriptionText}>
              Паровые котлы BX с легкостью встраиваются в уже сложившиеся и
              вновь проектируемые системы сбора данных и управления. Управление
              котлами может быть построено на технологиях логического контроля,
              позволяющих отображать и настраивать рабочие параметры.
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
            <img
              src="/images/catalog/parovye-kotly/bx/table.jpg"
              alt="Паровые котлы BX"
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
