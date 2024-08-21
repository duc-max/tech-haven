import clsx from "clsx";

import { Container } from "react-bootstrap";
import style from "./Cta.module.scss";
import { ShowNowBtn } from "../Button";
import { useEffect, useState } from "react";

function Cta() {
  const [translateY, setTranslateY] = useState(1.77075);

  useEffect(() => {
    let direction = 1;
    const interval = setInterval(() => {
      setTranslateY((prev) => {
        if (prev >= 10) direction = -1;
        if (prev <= 1.77075) direction = 1;
        return prev + direction * 0.1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);
  return (
    <section style={{ marginBottom: "150px", paddingTop: "30px" }}>
      <Container>
        <div className={clsx(style.ctaWrap)}>
          <img
            className={clsx(style.ctaImg)}
            style={{
              transform: `translate3d(0px, ${translateY}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            src="./assets/images/cta1.png"
            alt="Cta"
          />
          <div className={clsx(style.ctaData)}>
            <div style={{ marginRight: "200px" }}>
              <span
                style={{
                  fontSize: "14px",
                  lineHeight: "150%",
                }}
              >
                SoundStream
              </span>
              <h3 className={clsx(style.ctaTitle)}>HarmonyHear Headphone</h3>
            </div>
            <ShowNowBtn />
          </div>

          <img
            className={clsx(style.ctaImage)}
            src="./assets/images/cta2.png"
            alt="Cta"
          />
          <div className={clsx(style.ctaBadge)}>
            <div>35%</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;
