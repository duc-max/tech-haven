import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import clsx from "clsx";

import style from "./Review.module.scss";
function Review() {
  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <SectionTitle title={"Happy Customers"} next={true} />
        <Row>
          <Col md={6}>
            <div className={clsx(style.reviewBlock)}>
              <div className={clsx(style.reviewImg)}>
                <img src="./assets/images/review1.jpg" alt="review" />
              </div>
              <div className={clsx(style.reviewData)}>
                <p>
                  The iGlow Wireless Earbuds are a game-changer for workouts!
                  They stay in place even during intense exercises, and the
                  sound quality is impressive. Definitely worth the investment!
                </p>
                <div>
                  <div className={clsx(style.clientName)}>Devon Lane</div>
                  <div className={clsx(style.bodySmall)}>Dallas, USA</div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={clsx(style.reviewBlock)}>
              <div className={clsx(style.reviewImg)}>
                <img src="./assets/images/review2.jpg" alt="review" />
              </div>
              <div className={clsx(style.reviewData)}>
                <p>
                  The PixelFlare LED Strip transformed my room into a cozy
                  space! The colors are vibrant, and I love the different
                  lighting modes. Adds a cool ambiance to any room.!
                </p>
                <div>
                  <div className={clsx(style.clientName)}>Brooklyn Simmons</div>
                  <div className={clsx(style.bodySmall)}>Los Angeles, USA</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Review;
