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
                      <li>Серия REX DUAL и REX DUAL F</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>
                    Водогрейные котлы <br/> REX DUAL и REX DUAL F
                  </h1>
                  <p className={s.productSubtitle}>Расчетное давление 5 бар</p>
                  <p className={s.productSubtitle}>
                    Полезная мощность 80 ÷ 2600 кВт
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 92 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/vodogreinye-kotly/rex-dual.jpg"
                  alt="Водогрейные котлы REX DUAL и REX DUAL F"
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
              REX DUAL – блочное решение на основе двух котлов REX,
              скомпонованных в заводских условиях. Компоновка может быть
              вертикальной или горизонтальной, позволяя получить двукратное
              увеличение мощности котельной установки при незначительном
              увеличении габаритов. Котлы REX DUAL обладают всеми
              конструктивными особенностями и преимуществами моделей REX и
              рассчитаны на применение в системах отопления и ГВС с температурой
              от 60 до 110 °C.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>
              Высокотехнологичное управление
            </h3>
            <p className={s.descriptionText}>
              Управление генератором может быть выполнено посредством
              программируемого логического контроллера, полностью совместимого с
              любой системой сбора данных, что позволяет отображать и
              настраивать рабочие параметры.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Максимальная эксплуатационная гибкость
            </h3>
            <p className={s.descriptionText}>
              Благодаря большому объему воды и высокой теплоемкости котел
              применим для работы в любых условиях эксплуатации.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Эффективность при любых условиях
            </h3>
            <p className={s.descriptionText}>
              Комплексные решения для повышения энергетической эффективности на
              основе применения систем рекуперации тепла дымовых газов,
              специально разработанных и встроенных в котел.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Простая, быстрая и безопасная установка
            </h3>
            <p className={s.descriptionText}>
              Простая установка генератора, необходимо выполнить только
              подключение электрической и гидравлической линий, а также к линии
              подачи пара и дренажа.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Генератор был разработан в соответствии с самыми строгими
              международными нормами по технике безопасности.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Повышенная энергоэффективность (для REX F)
            </h3>
            <p className={s.descriptionText}>
              Встроенное инновационное решение для рекуперации дымовых газов,
              существенно увеличивающее КПД котлов и сокращающее объем выброса
              CO2 в атмосферу.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/vodogreinye-kotly/rexdual/table.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>

            <ul>
              <li>- Блочный корпус с теплоизоляцией</li>
              <li>- Турбулизаторы</li>
              <li>- Щетка для чистки</li>
              <li>- Гидравлические коллекторы подачи и обратки</li>
              <li>- Комплект для гидравлического подключения котлов</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
