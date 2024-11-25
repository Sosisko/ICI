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
                  <h1 className={s.productTitle}>Паровые котлы GX S</h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 12, 15 бар
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
                  src="/images/catalog/parovye-kotly/gxs.jpg"
                  alt="Паровые котлы GX S"
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
              Промышленные паровые котлы GX S с тремя оборотами дымовых газов,
              проходящим пламенем и омываемым днищем топки оснащены
              пароперегревателем моноблочного типа для автоматической работы.
              Котлы поставляются в полной заводской готовности и снабжены всей
              необходимой арматурой для быстрого пуска и эксплуатации.
            </p>
            <p className={s.descriptionText}>
              Пламя проходит через топку и дымовые газы направляются в полностью
              омываемую поворотную камеру. В поворотной камере достигается
              полное сгорание топлива и дымовые газы разворачиваются,
              возвращаясь по трубному пучку к передней части котла. Здесь
              дымовые газы поступают в теплообменник, входящий в состав
              пароперегревателя, и значительно охлаждаясь, перегревают пар.
              Третий оборот дымовых газов отводит продукты сгорания к задней
              части котла для их вывода наружу.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Постоянная подача пара</h3>
            <p className={s.descriptionText}>
              Благодаря наличию паровой камеры большого объема котлы GX S
              справляются с высокими нагрузками при отборе перегретого пара.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Компенсация теплового расширения
            </h3>
            <p className={s.descriptionText}>
              Обеспечивается в любых условиях работы за счет горячей
              развальцовки трубных решеток и применения гофрированной топки.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Серия GX S разработана в соответствии с самыми строгими
              международными нормами техники безопасности и отвечает требованиям
              российских промышленных стандартов.
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
              К парогенераторам GX S можно заказать дополнительное оборудование,
              которое будет смонтировано и испытано в заводских условиях и будет
              поставлено полностью готовым к пуску и эксплуатации.
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
