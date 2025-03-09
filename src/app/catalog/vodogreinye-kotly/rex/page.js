// Core
import Link from "next/link";

// Components
import Footer from "../../../components/Footer/Footer";

// Style
import s from "../../catalog.module.css";

export const metadata = {
  title: "Водогрейные котлы REX и REX F - ICI Caldaie",
  description: "Каталог котлов ICI Caldaie, водогрейные котлы REX и REX F",
  keywords: "ICI Caldaie, котлы, водогрейные котлы REX и REX F",
};

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
                      <li>Серия REX и REX F</li>
                    </ul>
                  </div>
                  <h1 className={s.productTitle}>
                    Водогрейные котлы REX и REX F
                  </h1>
                  <p className={s.productSubtitle}>
                    Расчетное давление 5 или 6 бар
                  </p>
                  <p className={s.productSubtitle}>
                    Полезная мощность 70 ÷ 6000 кВт
                  </p>
                  <p className={s.productSubtitle}>КПД до 95,0 %</p>
                </div>
              </div>
              <div className={s.productImageBlock}>
                <img
                  className={s.image}
                  src="/images/catalog/vodogreinye-kotly/rex.jpg"
                  alt="Водогрейные котлы REX и REX F"
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
              Водогрейный газотрубный котел с реверсивным развитием факела в
              топке. Топка цилиндрической формы, имеющая выпуклое днище,
              поддерживаемая полностью омываемым патрубком. Предназначен для
              работы с жидкотопливными и газовыми наддувными горелками.
              Предназначен для использования в отопительных системах с
              температурой воды от 60 до 110 °C. В отдельную группу выделена
              модификация REX F с повышенным КПД (до 95%) для работы на газовом
              топливе. Котлы REX F обеспечивают наибольшую экономию топлива за
              счет увеличения теплоотдачи. Дополнительным элементом конструкции
              модификаций REX F является запатентованная система Fin-e
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
            {/* <img
              src="/images/catalog/vodogreinye-kotly/rex/table.jpg"
              alt="Технические данные"
            /> */}
            <table className={s.table}>
              <thead>
                <tr>
                  <th rowspan="2">Модели</th>
                  <th rowspan="2">
                    Полезная мощность при температуре 70°С
                    <br />
                    кВт
                  </th>
                  <th colspan="2">
                    Расход тепла
                    <br />
                    кВт
                  </th>
                  <th colspan="2">
                    Сопротивление газового тракта
                    <br />
                    мбар
                  </th>
                  <th rowspan="2">
                    Противодавление гидравлического тракта
                    <br />
                    мбар
                  </th>
                  <th rowspan="2">
                    Полный объем воды
                    <br />л
                  </th>
                  <th colspan="2">
                    Общий вес
                    <br />
                    кг
                  </th>
                </tr>
                <tr>
                  <th>REX</th>
                  <th>REX F</th>
                  <th>REX</th>
                  <th>REX F</th>
                  <th>REX</th>
                  <th>REX F</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>REX 7</td>
                  <td>70</td>
                  <td>76</td>
                  <td>74,2</td>
                  <td>0,8</td>
                  <td>0,9</td>
                  <td>8</td>
                  <td>105</td>
                  <td>216</td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>REX 8</td>
                  <td>80</td>
                  <td>87</td>
                  <td>84,7</td>
                  <td>1,0</td>
                  <td>1,1</td>
                  <td>10</td>
                  <td>105</td>
                  <td>216</td>
                  <td>222</td>
                </tr>
                <tr>
                  <td>REX 9</td>
                  <td>90</td>
                  <td>98</td>
                  <td>95,2</td>
                  <td>0,8</td>
                  <td>0,9</td>
                  <td>13</td>
                  <td>123</td>
                  <td>258</td>
                  <td>266</td>
                </tr>
                <tr>
                  <td>REX 10</td>
                  <td>100</td>
                  <td>109</td>
                  <td>105,6</td>
                  <td>1,0</td>
                  <td>1,1</td>
                  <td>16</td>
                  <td>123</td>
                  <td>258</td>
                  <td>266</td>
                </tr>
                <tr>
                  <td>REX 12</td>
                  <td>120</td>
                  <td>130</td>
                  <td>126,5</td>
                  <td>1.1</td>
                  <td>1,3</td>
                  <td>23</td>
                  <td>123</td>
                  <td>258</td>
                  <td>266</td>
                </tr>
                <tr>
                  <td>REX 15</td>
                  <td>150</td>
                  <td>163</td>
                  <td>157,8</td>
                  <td>1,2</td>
                  <td>1,3</td>
                  <td>35</td>
                  <td>172</td>
                  <td>346</td>
                  <td>357</td>
                </tr>
                <tr>
                  <td>REX 20</td>
                  <td>200</td>
                  <td>216</td>
                  <td>210</td>
                  <td>1.9</td>
                  <td>2,2</td>
                  <td>63</td>
                  <td>172</td>
                  <td>346</td>
                  <td>357</td>
                </tr>
                <tr>
                  <td>REX 25</td>
                  <td>250</td>
                  <td>271</td>
                  <td>263,5</td>
                  <td>2,0</td>
                  <td>2,4</td>
                  <td>98</td>
                  <td>220</td>
                  <td>431</td>
                  <td>442</td>
                </tr>
                <tr>
                  <td>REX 30</td>
                  <td>300</td>
                  <td>325</td>
                  <td>315,5</td>
                  <td>2,0</td>
                  <td>2,4</td>
                  <td>50</td>
                  <td>300</td>
                  <td>475</td>
                  <td>489</td>
                </tr>
                <tr>
                  <td>REX 35</td>
                  <td>350</td>
                  <td>379</td>
                  <td>368</td>
                  <td>2.9</td>
                  <td>3,4</td>
                  <td>67</td>
                  <td>356</td>
                  <td>542</td>
                  <td>558</td>
                </tr>
                <tr>
                  <td>REX 40</td>
                  <td>420</td>
                  <td>455</td>
                  <td>420</td>
                  <td>4,5</td>
                  <td>4,7</td>
                  <td>42</td>
                  <td>360</td>
                  <td>584</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>REX 50</td>
                  <td>500</td>
                  <td>542</td>
                  <td>524</td>
                  <td>4,2</td>
                  <td>4,8</td>
                  <td>60</td>
                  <td>540</td>
                  <td>853</td>
                  <td>871</td>
                </tr>
                <tr>
                  <td>REX 62</td>
                  <td>620</td>
                  <td>672</td>
                  <td>649</td>
                  <td>6,4</td>
                  <td>7,3</td>
                  <td>92</td>
                  <td>645</td>
                  <td>963</td>
                  <td>981</td>
                </tr>
                <tr>
                  <td>REX 75</td>
                  <td>750</td>
                  <td>813</td>
                  <td>786</td>
                  <td>5,2</td>
                  <td>5,8</td>
                  <td>55</td>
                  <td>855</td>
                  <td>1205</td>
                  <td>1230</td>
                </tr>
                <tr>
                  <td>REX 85</td>
                  <td>850</td>
                  <td>921</td>
                  <td>891</td>
                  <td>7,2</td>
                  <td>8,0</td>
                  <td>71</td>
                  <td>855</td>
                  <td>1205</td>
                  <td>1230</td>
                </tr>
                <tr>
                  <td>REX 95</td>
                  <td>950</td>
                  <td>1030</td>
                  <td>997</td>
                  <td>5,2</td>
                  <td>5,9</td>
                  <td>89</td>
                  <td>950</td>
                  <td>1417</td>
                  <td>1446</td>
                </tr>
                <tr>
                  <td>REX 100</td>
                  <td>1020</td>
                  <td>1106</td>
                  <td>1069</td>
                  <td>4,0</td>
                  <td>4,5</td>
                  <td>42</td>
                  <td>1200</td>
                  <td>1843</td>
                  <td>1880</td>
                </tr>
                <tr>
                  <td>REX 120</td>
                  <td>1200</td>
                  <td>1301</td>
                  <td>1259</td>
                  <td>5,5</td>
                  <td>6,2</td>
                  <td>58</td>
                  <td>1200</td>
                  <td>1843</td>
                  <td>1880</td>
                </tr>
                <tr>
                  <td>REX 130</td>
                  <td>1300</td>
                  <td>1409</td>
                  <td>1364</td>
                  <td>6,5</td>
                  <td>7,3</td>
                  <td>68</td>
                  <td>1200</td>
                  <td>1843</td>
                  <td>1880</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.descriptionBlock}>
            <h2 className={s.descriptionTitle}>Стандартная комплектация</h2>
            <p className={s.descriptionText}>
              Котлы серий REX и REX F поставляются полностью готовыми к
              эксплуатации.
            </p>
            <h3 className={s.descriptionSubtitle}>
              Комплект поставки для моделей мощностью 70-3500 кВт
            </h3>
            <ul>
              <li>- Блочный теплоизолированный корпус</li>
              <li>- Турбулизаторы</li>
              <li>- Щетка для чистки</li>
            </ul>
            <h3 className={s.descriptionSubtitle}>
              Для моделей мощностью 4000-6000 кВт
            </h3>
            <h4>Приборы для контроля давления:</h4>
            <ul>
              <li>
                - Манометр с большим циферблатом с трехходовым испытательным
                краном
              </li>
            </ul>
            <h4>Приборы для контроля температуры:</h4>
            <ul>
              <li>- Термометр с большим циферблатом, шкала 0-120°C</li>
              <li>
                - Предохранительный термостат высокой температуры с ручной
                перезарядкой (110°C)
              </li>
              <li>- Термопара РТ100</li>
              <li>
                - Предохранительный термостат с ручной перезарядкой (110°C)
                сертифицирован INAIL
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default rex;
