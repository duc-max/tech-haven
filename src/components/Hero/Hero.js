/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container } from "react-bootstrap";

import clsx from "clsx";
import style from "./Hero.module.scss";
import { ShowNowBtn } from "../Button";
function Hero() {
  return (
    <section style={{ backgroundColor: "#fff" }}>
      <Container>
        <div className={clsx(style.heroWrapper)}>
          <div className={clsx(style.heroData)}>
            <div className={clsx(style.heroTextData)}>
              <div>
                <h1>Find Your Perfect Tech Companion Here</h1>
                <p>
                  Founded with a vision to redefine the way you shop for
                  electronics, HiTech is your one-stop destination for all
                  things tech
                </p>
              </div>
              <ShowNowBtn />
            </div>
          </div>
          <div className={clsx(style.heroImages)}>
            <div className={clsx(style.heroImage)}>
              <img
                src="./assets/images/01.png"
                alt="Hero image"
                loading="eager"
              />
            </div>

            <div className={clsx(style.heroRight)}>
              <div className={clsx(style.heroMainImg)}>
                <img
                  src="./assets/images/02.png"
                  alt="Hero image"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
