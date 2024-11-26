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
                        <Link href="/catalog/vodogreinye-kotly">
                          Водогрейные котлы
                        </Link>
                      </li>
                      <span>/</span>
                      <li>Серия TNOX.e / TNOX.e EN</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>
                    Водогрейные котлы <br /> TNOX.e / TNOX.e EN
                  </h1>
                  <p className={s.productSubtitle}>Расчетное давление 6 бар</p>
                  <p className={s.productSubtitle}>
                    Полезная мощность 2500 ÷ 17000 кВт
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 95,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/vodogreinye-kotly/TNOX.jpg"
                  alt="Водогрейные котлы TNOX.e / TNOX.e EN"
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
              Линейка TNOX.е / TNOX.e EN разработана для обеспечения
              максимальной энергоэффективности и обладает одним из самых высоких
              показателей КПД в классе промышленного водогрейного оборудования.
            </p>
            <p className={s.descriptionText}>
              В конструкции агрегатов TNOX.е / TNOX.e EN инженеры ICI Caldaie
              применили сразу несколько технических усовершенствований для
              улучшения теплообмена. Котлы данной серии широко востребованы в
              гражданских и промышленных областях, где предъявляются повышенные
              требования к энергоэффективности котельных установок.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Повышенный КПД</h3>
            <p className={s.descriptionText}>
              Благодаря увеличению поверхностей теплообмена в моделях TNOX.e /
              TNOX.e EN удалось добиться повышения КПД при любых
              эксплуатационных нагрузках.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Пониженные требования к условиям экспулатации
            </h3>
            <p className={s.descriptionText}>
              Котлы модельного ряда TNOX.e / TNOX.e EN работают с большим
              объемом воды и потому обладают более высокой тепловой инерцией,
              что делает их мало чувствительными к скачкам давления и
              температуры теплоносителя.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Различные варианты конфигурации
            </h3>
            <p className={s.descriptionText}>
              К любому агрегату из линейки TNOX.e / TNOX.e EN можно заказать
              широкий набор дополнительного оборудования, получив готовое
              заводское решение или наоборот ограничиться заказом только базовой
              комплектации, сэкономив на общей стоимости покупки.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Котлы промышленной серии разработаны в соответствии с самыми
              строгими международными нормами по технике безопасности и оснащены
              всей необходимой противоаварийной аппаратурой и сигнализацией.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Надежность и долговечность
            </h3>
            <p className={s.descriptionText}>
              Благодаря постоянному совершенствованию и многолетнему инженерному
              опыту компании ICI Caldaie промышленные теплогенераторы TNOX.e /
              TNOX.e EN остаются одним из самых надежных и долговечных в классе.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/vodogreinye-kotly/tnoxe/table1.jpg" />
            <img src="/images/catalog/vodogreinye-kotly/tnoxe/table2.jpg" />
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
            <h4>Предохранительный термостат с ручной перезарядкой (110°C)</h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
