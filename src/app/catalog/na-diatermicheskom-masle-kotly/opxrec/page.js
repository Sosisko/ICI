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
                  <h1 className={s.productTitle}>
                    Котлы на диатермическом масле (ВОТ) OPX REC
                  </h1>
                  <p className={s.productSubtitle}>Расчетное давление 10 бар</p>
                  <p className={s.productSubtitle}>Мощность 1163 ÷ 9302 кВт</p>
                  <p className={s.productSubtitle}>КПД {">"} 91,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/na-diatermicheskom-masle-kotly/opxrec.jpg"
                  alt="Котлы на диатермическом масле (ВОТ) OPX REC"
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
              Серия котлов OPX REC включает промышленные теплогенераторы на
              диатермическом масле мощностью до 9302 кВт. В отличие от линейки
              OPX модели OPX REC оснащены устройством предварительного нагрева
              горячего воздуха, смонтированным в едином корпусе с котлом. Такое
              конструктивное решение позволяет увеличить КПД котлов до 91%.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Оборудование котлов на диатермическом масле OPX REC многократно
              совершенствовалось и соответствует самым строгим международными
              нормам техники безопасности.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Совместимость с системами автоматизации
            </h3>
            <p className={s.descriptionText}>
              Управление котлом может быть реализовано на технологиях
              логического контроля, полностью совместимых с любыми системами
              сбора данных. Котлы OPX и OPX REC без каких-либо проблем
              включаются в уже сложившиеся системы индикации и управления.
            </p>
            <h3 className={s.descriptionSubtitle}>Простой и быстрый монтаж</h3>
            <p className={s.descriptionText}>
              Котлы на диатермическом масле серии OPX поставляются со всеми
              необходимыми для подключения компонентами. Сборка и тщательные
              проверочные испытания производятся на заводе в Италии.
            </p>
            <h3 className={s.descriptionSubtitle}>Энергоэффективность</h3>
            <p className={s.descriptionText}>
              Для повышения энергетической эффективности в конструкцию котельных
              агрегатов заложена система рекуперации дымовых газов, что
              позволяет увеличить общий КПД установки.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Большой выбор заводских конфигураций
            </h3>
            <p className={s.descriptionText}>
              Ко всем моделям котлов ICI Caldaie можно заказать дополнительное
              оборудование, которое будет смонтировано и испытано в заводских
              условиях и будет поставлено полностью готовым к пуску и
              эксплуатации.
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
            <img src="/images/catalog/na-diatermicheskom-masle-kotly/opxrec/table.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>

            <ul>
              <li>
                - 2 соединения входа/выхода в комплекте с ответными фланцами
              </li>
              <li>- 1 дренажный клапан котла</li>
              <li>
                - 2 манометра на входе/выходе масла в комплекте со стальными
                отсечными кранами
              </li>
              <li>
                - 1 предохранительный термостат с ручной перезарядкой с
                компенсацией теплового расширения
              </li>
              <li>
                - 1 предохранительное дифференциальное реле давления для
                циркуляции масла в котле в комплекте со стальными кранами
              </li>
              <li>- 1 датчик температуры подачи масла</li>
              <li>- 1 датчик температуры обратки масла</li>
              <li>- 1 датчик температуры на выходе дымовых газов</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>Группа циркуляции масла</h3>
            <ul>
              <li>
                - Электрический насос, напрямую соединенный с электродвигателем.
              </li>
              <li>
                - 2 запорных, чугунных клапана с металлическим сильфонным
                уплотнением, установленные на всасе и подаче насоса
              </li>
              <li>- 1 чугунный фильтр, установленный на всасе насоса</li>
              <li>- 1 манометр в комплекте с отсечными стальными кранами</li>
              <li>
                - 2 компенсатора теплового расширения из нержавеющей стали,
                смонтированные на всасе и подаче насоса (модели {">"} OPX / OPX
                REC 3000)
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
