// Styles
import s from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <section className={s.infoSection}>
      <div className="container">
        <div className={s.infoBlock}>
          <div className={s.textBlock}>
            <h2 className={s.title}>ICI CALDAIE S.P.A.</h2>
            <p className={s.text}>
              ICI имеет долгую историю, которая зародилась и развивалась вокруг
              культуры труда, общих ценностей, целей и стремлений.
            </p>
            <p className={s.text}>
              Мы верим, что предприятия могут добиться более эффективного
              производства и снизить потребление, чтобы достичь углеродной
              нейтральности к 2050 году.
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
