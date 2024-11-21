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
                    Водогрейные котлы TNOX / TNOX EN
                  </h1>
                  <p className={s.productSubtitle}>Расчетное давление 6 бар</p>
                  <p className={s.productSubtitle}>
                    Полезная мощность 2500 ÷ 25000 кВт
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 93,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/vodogreinye-kotly/TNOX.jpg"
                  alt="Водогрейные котлы TNOX / TNOX EN"
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
              Промышленные водогрейные котлы TNOX / TNOX EN – это модификации
              серии TNX / TNX EN. Основное отличие – в повышенном КПД,
              получаемым за счет увеличения теплонапряженности объема топки.
              Сфера применения – отопительные системы большой мощности с
              рабочими температурами от 60 до 110°C. Котлы ICI TNOX рассчитаны
              на работу в системах на 2500-6000 кВт, TNOX EN – в системах от
              7000 до 17000, а по запросу и до 25000 кВт.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Повышенный КПД</h3>
            <p className={s.descriptionText}>
              Благодаря увеличению поверхностей теплообмена в моделях TNOX /
              TNOX EN удалось добиться повышения КПД при любых эксплуатационных
              нагрузках.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Пониженные требования к условиям экспулатации
            </h3>
            <p className={s.descriptionText}>
              Котлы ICI Caldaie модельного ряда TNOX / TNOX EN работают с
              большим объемом воды и потому обладают более высокой тепловой
              инерцией, что делает их мало чувствительными к скачкам давления и
              температуры теплоносителя.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Различные варианты конфигурации
            </h3>
            <p className={s.descriptionText}>
              К любому агрегату из линейки TNOX / TNOX EN можно заказать широкий
              набор дополнительного оборудования, получив готовое заводское
              решение или наоборот ограничиться заказом только базовой
              комплектации, сэкономив на общей стоимости покупки.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Котлы промышленной серии разработаны в соответствии с самыми
              строгими международными нормами по технике безопасности и оснащены
              всей необходимой противоаварийной аппаратурой и сигнализацией.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Надежность и долговечность{" "}
            </h3>
            <p className={s.descriptionText}>
              Благодаря постоянному совершенствованию и многолетнему инженерному
              опыту компании ICI Caldaie промышленные теплогенераторы TNOX /
              TNOX EN остаются одним из самых надежных и долговечных в классе.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/vodogreinye-kotly/tnox/table1.jpg" />
            <img src="/images/catalog/vodogreinye-kotly/tnox/table2.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>

            <h3 className={s.descriptionSubtitle}>
              Приборы для контроля давления
            </h3>
            <ul>
              <li>
                - Манометр с большим циферблатом с трехходовым испытательным
                краном{" "}
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
                перезарядкой (110°C){" "}
              </li>
              <li>- Термопара РТ100 </li>
            </ul>
            <h4>Группа продувки с проходным отсечным клапаном</h4>
            <h4>Электрический шкаф управления котлом</h4>
            <p>защита IP55 400 V/3 + N/50 Гц</p>
            <h4>Предохранительный термостат с ручной перезарядкой (110°C)</h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
