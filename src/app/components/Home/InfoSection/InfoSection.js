// Styles
import s from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={s.infoSection}>
      <div className="container">
        <div className={s.infoBlock}>
          <div className={s.textBlock}>
            <h2 className={s.title}>О производстве</h2>
            <p className={s.text}>
              ICI CALDAIE является официальным дилером производства CALDAIE в
              России. Мы предлагаем высококачественное отопительное
              оборудование, которое обеспечивает комфортные условия отопления
              для вашего дома.
            </p>
          </div>

          <div className={s.imgBlock}>
            <img src="/images/IMG0080low.jpg" alt="infoSection" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
