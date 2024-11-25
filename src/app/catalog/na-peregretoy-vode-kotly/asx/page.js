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
                    Котлы на перегретой воде ASX
                  </h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 5, 12 бар
                  </p>
                  <p className={s.productSubtitle}>Мощность 233 ÷ 3488 кВт</p>
                  <p className={s.productSubtitle}>КПД {">"} 90,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/na-peregretoy-vode-kotly/ASX.jpg"
                  alt="Котлы на перегретой воде ASX"
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
              ASX – серия котлов на перегретой воде малой и средней мощности для
              отопительных систем с рабочей температурой выше 110°C. Котлы
              моноблочного типа с реверсивным развитием факела в топке и
              омываемым днищем рассчитаны на давление 5 или 12 бар. В
              зависимости от установленной горелки могут работать как на жидком,
              так и на газообразном топливе. Котлы ASX поставляются полностью
              готовыми к подключению и пуску.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>
              Нечувствительность к условиям эксплуатации
            </h3>
            <p className={s.descriptionText}>
              Теплогенераторы ASX работают с большим объемом воды и обладают
              значительной тепловой инерцией, что позволяет сохранять
              эффективность в условиях скачков температуры и давления в системах
              водоснабжения.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Совместимость с комплексными системами управления
            </h3>
            <p className={s.descriptionText}>
              Управление котлом может быть реализовано на технологиях
              логического контроля, полностью совместимых с любыми системами
              сбора данных. Котлы ASX без каких-либо проблем включаются в
              действующие системы управления.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Котлы на перегретой воде ASX спроектированы и изготовлены в
              соответствии с самыми строгими международными нормами техники
              безопасности и отвечают требованиям российских промышленных
              стандартов.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Большой выбор заводских конфигураций
            </h3>
            <p className={s.descriptionText}>
              Ко всем моделям котлов ASX производства ICI Caldaie можно заказать
              дополнительное оборудование, которое будет смонтировано и испытано
              в заводских условиях и будет поставлено полностью готовым к пуску
              и эксплуатации.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/na-peregretoy-vode-kotly/asx/table.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>

            <h3 className={s.descriptionSubtitle}>
              Группа приборов контроля давления
            </h3>
            <ul>
              <li>- 2 предохранительных клапана</li>
              <li>
                - Манометр с большим циферблатом с трехходовым испытательным
                краном
              </li>
              <li>- Предохранительное реле максимального давления</li>
              <li>- Предохранительное реле минимального давления</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Группа приборов контроля температуры
            </h3>
            <ul>
              <li>- Термометр с большим циферблатом на подаче</li>
              <li>
                - Термосопротивление, подключенное к терморегулятору на шкафу
                управления котлом
              </li>
              <li>- Предохранительный термостат</li>
            </ul>

            <h3 className={s.descriptionSubtitle}>Группа продувки</h3>
            <ul>
              <li>- 1 отсечной проходной клапан</li>
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
