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
                  <h1 className={s.productTitle}>Паровые котлы SIXEN</h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 3 - 25 бар
                  </p>
                  <p className={s.productSubtitle}>
                    Паропроизводительность 350 ÷ 5000 кг/ч
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 90,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/parovye-kotly/sixen.jpg"
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
              Модельный ряд SIXEN представлен моноблочными газотрубными котлами
              с реверсивным развитием факела и омываемым днищем. Данный
              модельный ряд отличается широкой линейкой паровых котлов и
              предназначен для использования в технологических процессах в
              различных отраслях промышленности.
            </p>
            <p className={s.descriptionText}>
              По объемам продаж модели SIXEN сохраняют лидерство в классе
              промышленных паровых котлов средней мощности
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>
              Функциональная конструкция
            </h3>
            <p className={s.descriptionText}>
              Прямоугольная форма парового котла позволяет использовать верхнюю
              часть как площадку для обслуживания арматуры. Данное решение
              является уникальным для котлов данного типа.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Надежность и долговечность
            </h3>
            <p className={s.descriptionText}>
              Максимальная надежность и долговечность гарантированы особой
              конструкцией, обеспечивающей низкие теплопотери.
            </p>
            <h3 className={s.descriptionSubtitle}>Постоянная подача пара</h3>
            <p className={s.descriptionText}>
              Благодаря наличию паровой камеры большого объема котел
              удовлетворяет любые пиковые нагрузки при отборе пара.
            </p>
            <h3 className={s.descriptionSubtitle}>Энергоэффективность</h3>
            <p className={s.descriptionText}>
              Для повышения энергоэффективности возможна установка
              дополнительного оборудования: группы модуляции питательной воды,
              экономайзера, конденсора и т.п., что позволит повысить общий КПД
              котельной установки.
            </p>
            <h3 className={s.descriptionSubtitle}>Высокое качество пара</h3>
            <p className={s.descriptionText}>
              Значительная поверхность испарения и наличие внутреннего
              сепаратора предотвращают попадание капель воды при отборе пара,
              поэтому произведенный пар всегда имеет высокую степень сухости.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Котел был разработан в соответствии с самыми строгими
              международными нормами по технике безопасности.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/parovye-kotly/sixen/table.jpg" />
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
              <li>- Предохранительное реле давления с ручной перезарядкой</li>
            </ul>

            <h3 className={s.descriptionSubtitle}>Группа продувки днища</h3>
            <ul>
              <li>- Отсечной клапан продувки проходной
              </li>
              <li>
                - Клапан быстрого дренажа с наружной резьбой с рукояткой

              </li>
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
