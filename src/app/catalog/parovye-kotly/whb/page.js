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
                        <Link href="/catalog/parovye-kotly">Паровые котлы</Link>
                      </li>
                      <span>/</span>
                      <li>Серия WHB</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>Паровые котлы WHB</h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 3 - 25 бар
                  </p>
                  <p className={s.productSubtitle}>
                    Паропроизводительность 50 ÷ 32000 кг/ч
                  </p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/parovye-kotly/WHB.jpg"
                  alt="Паровые котлы WHB"
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
              В качестве единственного источника тепла в котлах-утилизаторах WHB
              используются отработанные дымовые газы без дополнительного
              источника горения. Котлы работают полностью в автоматическом
              режиме и поставляются со всей необходимой арматурой для быстрого
              ввода в эксплуатацию.{" "}
            </p>
            <p className={s.descriptionText}>
              КПД котлов может быть увеличен на 5% с помощью установки
              экономайзера.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Модульная конструкция</h3>
            <p className={s.descriptionText}>
              Для заказа доступны несколько вариантов с различным расположением
              секции рекуперации и характеристиками получаемого пара (насыщенный
              или перегретый)
            </p>
            <h3 className={s.descriptionSubtitle}>Гибкая система управления</h3>
            <p className={s.descriptionText}>
              Котлы могут быть включены в текущую систему индикации и управления
              оборудованием котельной.
            </p>
            <h3 className={s.descriptionSubtitle}>Простота обслуживания</h3>
            <p className={s.descriptionText}>
              Основные узлы котлов-утилизаторов имеют продуманную компоновку с
              быстрым доступом для осмотра, обслуживания и ремонта.
            </p>
            <h3 className={s.descriptionSubtitle}>Передовое решение</h3>
            <p className={s.descriptionText}>
              Серия WHB считается одним из наиболее надежных и прогрессивных
              решений в области промышленной утилизации отработанных дымовых
              газов с последующим использованием полученного пара в
              технологических процессах
            </p>
            <h3 className={s.descriptionSubtitle}>
              Высокая заводская готовность
            </h3>
            <p className={s.descriptionText}>
              Котлы собираются и тестируются перед отправкой и доставляются в
              полной готовности к подключению и эксплуатации.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
