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
                        <Link href="/catalog/na-diatermicheskom-masle-kotly">
                          Котлы на диатермическом масле
                        </Link>
                      </li>
                      <span>/</span>
                      <li>Серия OPX</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>
                    Котлы на диатермическом масле (ВОТ) OPX
                  </h1>
                  <p className={s.productSubtitle}>Расчетное давление 10 бар</p>
                  <p className={s.productSubtitle}>Мощность 116 ÷ 9302 кВт</p>
                  <p className={s.productSubtitle}>КПД {">"} 86,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/na-diatermicheskom-masle-kotly/OPX.jpg"
                  alt="Котлы на диатермическом масле (ВОТ) OPX"
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
              Серия OPX представлена котлами на диатермическом масле,
              рассчитанные на рабочее давление до 10 бар и мощностью от 116 до
              9302 кВт. Конструкция котлов OPX обеспечивает низкую
              теплонапряженность масляного контура и высокую скорость циркуляции
              масла, а также защиту от перегрева диатермической жидкости. Котлы
              OPX могут работать на газу, дизельном топливе и мазуте. В комплект
              поставки входит все необходимые регулирующие и предохранительные
              устройства для автоматизированной работы агрегатов.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Оборудование OPX многократно совершенствовалось и соответствует
              самым строгим международными нормам техники безопасности.
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
            <h3 className={s.descriptionSubtitle}>
              Совместимость с системами управления
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
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/na-diatermicheskom-masle-kotly/opx/table.jpg" />
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
