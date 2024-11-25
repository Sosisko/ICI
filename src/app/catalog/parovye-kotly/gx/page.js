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
                  <h1 className={s.productTitle}>Паровые котлы GX</h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 3 - 25 бар
                  </p>
                  <p className={s.productSubtitle}>
                    Паропроизводительность 1700 ÷ 25000 кг/ч
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 90,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/parovye-kotly/gx.jpg"
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
              Котлы серии GX входят в число безусловных лидеров в линейке
              промышленных паровых котлов высокого давления и большой мощности.
              Устройство котлов – горизонтальное, моноблочное с тремя оборотами
              дымовых газов. Парогенераторы GX имеют превосходные
              эксплуатационные характеристики и обладают одними из самых высоких
              показателей надежности и долговечности. Котлы могут работать на
              газообразном и жидком топливе, включая мазут.
            </p>
            <p className={s.descriptionText}>
              На базе модельного ряда GX компанией ICI Caldaie реализован целый
              ряд дополнительных модифицкаций таких, как: котлы со встроенным
              перегревателем GX S и котлы-утилизаторы GX C, построенные на
              принципе рекуперации технологических дымовых газов.{" "}
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Постоянная подача пара</h3>
            <p className={s.descriptionText}>
              Благодаря наличию паровой камеры большого объема котел
              удовлетворяет любые пиковые нагрузки при отборе пара.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Надежность и долговечность
            </h3>
            <p className={s.descriptionText}>
              Продуманная компоновка, обеспечивающая низкие теплопотери
              обеспечивает парогенераторам данной серии надежность и
              долговечность.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Большой выбор заводских конфигураций
            </h3>
            <p className={s.descriptionText}>
              К парогенераторам GX, как и другим моделям промышленных котлов ICI
              Caldaie можно заказать дополнительное оборудование, которое будет
              смонтировано и испытано в заводских условиях и будет поставлено
              полностью готовым к пуску и эксплуатации.
            </p>
            <h3 className={s.descriptionSubtitle}>Высокое качество пара</h3>
            <p className={s.descriptionText}>
              Устройство промышленных парогенераторов GX предусматривает большую
              (в сравнении с аналогами) площадь поверхности испарения и наличие
              встроенного сепаратора, отсекающего конденсат от подачи. Сухость
              пара на выходе близка к единице.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Компенсация теплового расширения
            </h3>
            <p className={s.descriptionText}>
              Обеспечиваются в любых условиях работы за счет горячей
              развальцовки трубных решеток и применения гофрированной топки.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Серия GX разработана в соответствии с самыми строгими
              международными нормами техники безопасности и отвечает требованиям
              российских промышленных стандартов.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/parovye-kotly/gx/table.jpg" />
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
