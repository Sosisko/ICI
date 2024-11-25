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
                  <h1 className={s.productTitle}>Паровые котлы FX / FX DUAL</h1>
                  <p className={s.productSubtitle}>Расчетное давление 5 бар</p>
                  <p className={s.productSubtitle}>
                    Паропроизводительность 50 ÷ 300 кг/ч
                  </p>
                  <p className={s.productSubtitle}>КПД {">"} 91,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/parovye-kotly/fx.jpg"
                  alt="Паровые котлы FX"
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
              Серия FX / FX DUAL включает паровые котлы, спроектированные для
              быстрого и бесперебойного обеспечения небольшими объемами пара (до
              300 кг/ч). Благодаря высокому качеству пара котлы могут
              использоваться как в производственных, так и гражданских целях.
              При этом использование парогенераторов FX / FX DUAL не требует
              строительства стационарной котельной и постоянного присутствия
              персонала, что снижает общие эксплуатационные издержки
              предприятия. В зависимости от потребности в паре можно выбрать
              модели FX с одним парогенератором и паропроизводительностью 50-150
              кг/ч или FX DUAL с двумя парогенераторами общей мощностью от 100
              до 300 кг/ч.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Преимущества</h2>
            <h3 className={s.descriptionSubtitle}>Высокое качество пара</h3>
            <p className={s.descriptionText}>
              Благодаря большой поверхности испарения и наличию в котлах FX / FX
              DUAL встроенного сепаратора при отборе пара практически
              исключается передача конденсата. Потребитель получает пар высокой
              степени сухости.
            </p>
            <h3 className={s.descriptionSubtitle}>Максимальная безопасность</h3>
            <p className={s.descriptionText}>
              Паровые котлы многократно совершенствовались и соответствуют самым
              строгим международными нормам техники безопасности.
            </p>
            <h3 className={s.descriptionSubtitle}>Простой и быстрый монтаж</h3>
            <p className={s.descriptionText}>
              Парогенераторы поставляются со всеми необходимыми для подключения
              компонентами. Сборка и тщательные проверочные испытания
              производятся на заводе в Италии.
            </p>
            <h3 className={s.descriptionSubtitle}>Модульная конструкция</h3>
            <p className={s.descriptionText}>
              Модульный принцип и вертикальная компоновка позволяют уместить
              агрегат большей паропроизводительности на той же площади, не
              занимая лишнее полезное пространство.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Совместимость с системами управления
            </h3>
            <p className={s.descriptionText}>
              Управление котлом может быть реализовано на технологиях
              логического контроля, полностью совместимых с любыми системами
              сбора данных. Котлы FX / FX DUAL без каких-либо проблем включаются
              в уже сложившиеся системы индикации и управления.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Большой выбор заводских конфигураций
            </h3>
            <p className={s.descriptionText}>
              Ко всем моделям паровых котлов ICI Caldaie можно заказать
              дополнительное оборудование, которое будет смонтировано и испытано
              в заводских условиях и будет поставлено полностью готовым к пуску
              и эксплуатации.
            </p>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Технические данные</h2>
            <img src="/images/catalog/parovye-kotly/fx/table.jpg" />
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>

            <h3 className={s.descriptionSubtitle}>Группа паровой арматуры</h3>
            <ul>
              <li>- Клапан отбора пара проходной</li>
              <li>- Предохранительный клапан</li>
              <li>- Индикатор уровня прямого действия</li>
              <li>- Группа отсечных кранов и сливной кран</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Рампа приборов контроля давления
            </h3>
            <ul>
              <li>- Манометр с трехходовым испытательным краном</li>
              <li>- Регулирующее реле давления</li>
              <li>- Ограничительное реле давления</li>
              <li>
                - Предохранительное реле давления с ручным сбросом в
                соответствии с PED
              </li>
            </ul>
            <h3 className={s.descriptionSubtitle}>Группа подачи воды</h3>
            <ul>
              <li>
                - Центробежный электронасос для подачи воды температурой до 90°C
              </li>
              <li>
                - Датчики 1-ого и 2-ого сигналов тревоги и блокировки горелки по
                низкому уровню
              </li>
              <li>- Отсечной клапан подачи питательной воды</li>
              <li>- Фильтр на входе насоса</li>
              <li>- Обратный клапан</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>Группа продувки днища</h3>
            <ul>
              <li>- Отсечной клапан</li>
              <li>
                - Пневматический дренажный клапан с электроклапаном сжатого
                воздуха
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
