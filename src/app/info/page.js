"use client";
// Core
import Link from "next/link";

// Components
import Footer from "../components/Footer/Footer";

// Styles
import s from "./info.module.css";

function infoPage() {
  return (
    <>
      <section className={s.infoPage}>
        <div className={s.wrapper}>
          <div className={s.textBlock}>
            <div className={s.breadcrumbs}>
              <ul>
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <span>/</span>
                <li>О производстве</li>
              </ul>
            </div>
            <div className={s.text}>
              <h1 className={s.title}>ICI caldaie s.p.a.</h1>
              <p className={s.subtitle}>
                Сердце, которое уже более 60 лет бьется в своем стремлении к
                будущему.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={s.infoSection}>
        <div className="container">
          <div className={s.contentInfoWrapper}>
            <div className={s.infoItem}>
              <h3 className={s.itemTitle}>История компании</h3>
              <ul>
                <li>
                  <h4>1958</h4>
                  <p>
                    ICI Caldaie S.p.A. была основана в провинции Вероны, как
                    компания-изготовитель стальных котлов с большим содержанием
                    воды.
                  </p>
                </li>
                <li>
                  <h4>1990-2000</h4>
                  <p>
                    ICI Caldaie S.p.A. Становится самым крупным в Италии
                    производителем котлов для централизованных систем.
                  </p>
                </li>
                <li>
                  <h4>1997</h4>
                  <p>Открытие первого филиала в Солсбери (Великобритания).</p>
                </li>
                <li>
                  <h4>2004</h4>
                  <p>
                    Добавление в линейку изделий учетных систем: снижение
                    потреблений, энергосбережение и управление затратами.
                  </p>
                </li>
                <li>
                  <h4>2009</h4>
                  <p>
                    Разработка ПО и аппаратных средств для запуска eterm™:
                    удаленный контроль за теплоагрегатами.
                  </p>
                </li>
                <li>
                  <h4>2010-2011</h4>
                  <p>
                    Новые специальные проекты для повышения энергоэффективности:
                    SIDERA 30 и CHP Net. ICI Caldaie входит в четверку
                    лидирующих производителей паровых котлов.
                  </p>
                </li>
                <li>
                  <h4></h4>
                  <p></p>
                </li>
                <li>
                  <h4>2014-2015</h4>
                  <p>
                    Открыта дверь в мир IoT. Подключение установок к сети
                    (eterm™).
                  </p>
                </li>
                <li>
                  <h4>2017</h4>
                  <p>
                    ECOVAPOR Представлена передовая система для производства
                    пара.
                  </p>
                </li>
                <li>
                  <h4>2018</h4>
                  <p>60-й юбилей.</p>
                </li>
              </ul>
            </div>
            <div className={s.infoItem}>
              <img className={s.infoItemImg} src="/images/info/info.webp" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default infoPage;
