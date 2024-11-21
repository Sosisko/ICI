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
                  <h1 className={s.productTitle}>Водогрейные котлы TNOX S</h1>
                  <p className={s.productSubtitle}>Расчетное давление 3 бар</p>
                  <p className={s.productSubtitle}>
                    Полезная мощность 1200 ÷ 14000 кВт
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 93,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/vodogreinye-kotly/TNOX.jpg"
                  alt="Водогрейные котлы TNOX S"
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
              Котлы TNOX S спроектированы для удовлетворения особых
              потребностей, возникающих при решении задач отопления теплиц.
              Котлы обеспечивают подачу тепла и поступление углекислого газа,
              необходимых для повышения урожайности в любых погодных условиях.
            </p>
            <p className={s.descriptionText}>
              Благодаря шестидесятилетнему опыту ICI Caldaie S.p.A. в
              проектировании и изготовлении систем отопления, котлы TNOX S
              включают целый комплекс инновационных решений, направленных на
              полное удовлетворение требований энергетической эффективности и
              снижение эксплуатационных расходов (КПД при оснащении конденсором
              - свыше 105%).
            </p>
            <p className={s.descriptionText}>
              Основным компонентом системы является котел серии TNOX S - котел с
              тремя оборотами дымовых газов, омываемым днищем топки и низкой
              тепловой нагрузкой топочного объема. Имеет топку большого размера
              для оптимизации процесса горения и снижения выбросов NOх в
              окружающею среду. Большой объем воды гарантирует надежность и
              долговечность изделия, а также высокую гибкость при пиковых
              нагрузках и устойчивость при продолжительной работе. Для
              достижения требуемой температуры подаваемых в теплицу дымовых
              газов котлы оснащены конденсором - рекуператором скрытого тепла
              дымовых газов, который снижает их температуру и увеличивает общий
              КПД системы.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>
              Экологическая безопасность
            </h3>
            <p className={s.descriptionText}>
              Котлы TNOX S обладают одними из самых низких показателей по
              выбросам NOx. Общий уровень выделения NOx в атмосферу не превышает
              до 40мг/нм3.
            </p>
            <h3 className={s.descriptionSubtitle}>Высокая эффективность</h3>
            <p className={s.descriptionText}>
              Топка больших размеров способствует более эффективному сжиганию
              топлива и теплообмену.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Экономия на монтаже системы
            </h3>
            <p className={s.descriptionText}>
              Низкая температура дымовых газов (50°C) позволяет использовать
              более дешевые дымоходные системы.
            </p>
            <h3 className={s.descriptionSubtitle}>Большой выбор горелок</h3>
            <p className={s.descriptionText}>
              Низкое противодавление газодинамического тракта позволяет
              использовать широкий диапазон горелок без привязки к какому-либо
              конкретному производителю
            </p>
            <h3 className={s.descriptionSubtitle}>
              Соответствие региональным стандартам
            </h3>
            <p className={s.descriptionText}>
              Тепличные котлы TNOX S поставляются по всему миру благодаря
              соответствию требованиям региональных стандартов и прохождению
              процедуры сертификации
            </p>
            <h3 className={s.descriptionSubtitle}>Быстрый запуск</h3>
            <p className={s.descriptionText}>
              Котельное оборудование TNOX S поставляется готовым для подключения
              к линиям подачи воды, электричества и топлива. При условии наличия
              коммуникаций пуск оборудования возможен в течение суток.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/vodogreinye-kotly/tnoxs/table.jpg" />
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
              <li>- Термопара РТ100 </li>
            </ul>
            <h4>Группа продувки с проходным отсечным клапаном</h4>
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
