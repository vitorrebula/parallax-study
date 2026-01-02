import { useEffect, useMemo, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import "./IntroArrival.css";

export function IntroArrival() {
  const [hideIndicator, setHideIndicator] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHideIndicator(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    const timeTogether = useMemo(() => {
    return calculateTimeTogether(new Date(2025, 6, 31)); 
  }, []);

    function calculateTimeTogether(startDate: Date) {
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
            ).getDate();
            days += lastMonth;
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }


  return (
    <section className="intro-container">
      <Parallax speed={-10}>
        <div className="intro-content">
          <h1>
            Raissa <span>&</span> Vitor
          </h1>
            <p>
            {timeTogether.years > 0 && `${timeTogether.years} anos, `}
            {timeTogether.months} meses e {timeTogether.days} dias
            <br />
            de nós dois!
            </p>
        </div>
      </Parallax>

      <div
        className={`scroll-indicator ${
          hideIndicator ? "scroll-indicator--hidden" : ""
        }`}
      >
        <span className="scroll-arrow" />
      </div>
    </section>
  );
}
