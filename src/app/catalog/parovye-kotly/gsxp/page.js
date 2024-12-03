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
                      <li>Серия GSX P</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>Паровые котлы GSX P</h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 3 - 25 бар
                  </p>
                  <p className={s.productSubtitle}>
                    Паропроизводительность 500 ÷ 6000 кг/ч
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 90,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/parovye-kotly/GSX.jpg"
                  alt="Паровые котлы GSX P"
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
              Моноблочные паровые котлы GSX P разработаны на основе оригинальных
              технических решений для обеспечения максимальной надежности,
              долговечности и простоты управления. В отличие от модельного ряда
              GSX котлы GSX P отвечают менее жестким стандартам экологической
              безопасности по уровню выбросов (менее 120 мг/нм3). В остальном
              принцип работы и конструктивные особенности парогенераторов GSX P
              схожи с моделями серии GSX.
            </p>
            <p className={s.descriptionText}>
              Котлы GSX P выпускаются для систем с расчетным давлением 12, 15 и
              25 бар. Для увеличения КПД с 90 до 95% котлы могут комплектоваться
              экономайзером в заводских условиях и поставляться в полной
              готовности к подключению.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Высокий КПД</h3>
            <p className={s.descriptionText}>
              Высокая энергетическая эффективность паровых котлов GSX P
              достигается благодаря большим поверхностям теплообмена,
              обеспечивающим высокую скорость испарения при любых рабочих
              нагрузках.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Надежность и долговечность
            </h3>
            <p className={s.descriptionText}>
              Особое устройство, обеспечивающее низкие теплопотери обеспечивает
              парогенераторам данной серии надежность и долговечность.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Совместимость с системами управления
            </h3>
            <p className={s.descriptionText}>
              Паровые котлы GSX P с легкостью встраиваются в уже сложившиеся и
              вновь проектируемые системы сбора данных и управлениях. Управление
              котлами может быть построено на технологиях логического контроля,
              позволяющих отображать и настраивать рабочие параметры.
            </p>
            <h3 className={s.descriptionSubtitle}>Высокое качество пара</h3>
            <p className={s.descriptionText}>
              Значительная поверхность испарения и наличие внутреннего
              сепаратора предотвращают попадание капель воды при отборе пара,
              поэтому пар, произведенный котлами серии GSX P, всегда имеет
              высокую степень сухости.
            </p>
            <h3 className={s.descriptionSubtitle}>Энергоэффективность</h3>
            <p className={s.descriptionText}>
              Вместе с котлами GSX P может быть установлено дополнительное
              оборудование: группа модуляции питательной воды, экономайзер,
              конденсор и т.п., что позволит повысить общий КПД и
              энергоэффективность котельной установки.
            </p>
            <h3 className={s.descriptionSubtitle}>Постоянная подача пара</h3>
            <p className={s.descriptionText}>
              Благодаря наличию паровой камеры большого объема котел
              удовлетворяет любые пиковые нагрузки при отборе пара.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/parovye-kotly/gsxp/table.jpg" />
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
