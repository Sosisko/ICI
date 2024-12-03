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
                        <Link href="/catalog/na-peregretoy-vode-kotly">
                          Котлы на перегретой воде
                        </Link>
                      </li>
                      <span>/</span>
                      <li>Серия ASGX EN</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>
                    Котлы на перегретой воде ASGX EN
                  </h1>
                  <p className={s.productSubtitle}>Расчетное давление 12 бар</p>
                  <p className={s.productSubtitle}>Мощность 3000 ÷ 17000 кВт</p>
                  <p className={s.productSubtitle}>КПД {">"} 90,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/na-peregretoy-vode-kotly/ASGX.jpg"
                  alt="Котлы на перегретой воде ASGX EN"
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
              ASGX EN - автоматизированные котлы на перегретой воде большой
              мощности. Котлы относятся к моноблочному типу, являются
              трехходовыми – с тремя оборотами дымовых газов и омываемым днищем
              топки. Котлы изготавливаются из высококачественной стали,
              соответствующей действующим нормативам. Котлы могут работать на
              газу, дизельном топливе и мазуте. В базовую комплектацию входят
              вся необходимые регулирующие и предохранительные устройства.
              Основное назначение – отопительные системы с рабочей температурой
              более 110°C.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Теплогенераторы на перегретой воде спроектированы и изготовлены в
              соответствии с наиболее строгими международными нормам техники
              безопасности.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Большой выбор заводских конфигураций
            </h3>
            <p className={s.descriptionText}>
              Ко всем моделям промышленных теплогенераторов ICI Caldaie можно
              заказать дополнительное оборудование, которое будет смонтировано и
              испытано в заводских условиях и будет поставлено полностью готовым
              к пуску и эксплуатации.
            </p>
            <h3 className={s.descriptionSubtitle}>Высокий КПД</h3>
            <p className={s.descriptionText}>
              Высокая энергетическая эффективность котлов ASGX EN достигается за
              счет увеличенных (в сравнении с аналогами) поверхностями
              теплообмена, гарантирующим максимальные значения КПД как при
              высоких, так и при низких рабочих нагрузках.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Совместимость с комплексными системами управления
            </h3>
            <p className={s.descriptionText}>
              Управление котлом может быть реализовано на технологиях
              логического контроля, полностью совместимых с любыми системами
              сбора данных. Котлы ASGX EN без каких-либо проблем включаются в
              уже сложившиеся системы индикации и управления.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/na-peregretoy-vode-kotly/asgx/table.jpg" />
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
