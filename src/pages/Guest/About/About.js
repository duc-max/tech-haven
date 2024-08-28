import clsx from "clsx";
import { Container } from "react-bootstrap";
import { Divider } from "antd";

import style from "./About.module.scss";
function About() {
  return (
    <>
      <Container>
        <div className={style.pageTitle}>
          <h1>Our Story</h1>
        </div>
        <div className={style.aboutWrap}>
          <div className={style.aboutImg}>
            <img src="./assets/images/about1.jpg" alt="about" />
          </div>

          <div className={style.aboutData}>
            <div>
              <h2 className={style.aboutTitle}>SINCE 2006</h2>
              <p style={{ marginBottom: "10px" }}>
                From humble beginnings to where we are today, our commitment to
                innovation has remained unwavering. We've overcome challenges,
                embraced opportunities, and evolved with the rapidly changing
                tech landscape.
              </p>
              <p>
                Our story is one of passion, innovation, and relentless pursuit
                of excellence. It all began with a shared vision to
                revolutionize the way people interact with technology.
              </p>
            </div>

            <div className={style.aboutFacts}>
              <div>
                <div className={style.factText}>14+</div>
                <div>
                  <div className={style.factTitle}>Stores</div>
                  <div>Discover our worldwide stores</div>
                </div>
              </div>
              <Divider style={{ height: "128px" }} type="vertical" />

              <div>
                <div className={style.factText}>118+</div>
                <div>
                  <div className={style.factTitle}>Brands</div>
                  <div>Explore our trusted brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
