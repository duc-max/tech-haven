import clsx from "clsx";
import { Col, Container, Row } from "react-bootstrap";

import style from "./WhatMake.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

function WhatMake() {
  return (
    <Container>
      <SectionTitle title={"What make us different"} disable={true} />
      <Row>
        <Col md={4}>
          <div style={{ width: "90%" }}>
            <div className={clsx(style.wmImg)}>
              <img src="./assets/images/wm1.jpg" alt="What make 1" />
            </div>
            <div>
              <h4 className={clsx(style.wmTitle)}>Customer Service</h4>
              <p className={clsx(style.wmText)}>
                Where your satisfaction is our top priority. Our dedicated team
                is here to assist you with any inquiries, providing personalized
                support and expert guidance.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div style={{ width: "90%" }}>
            <div className={clsx(style.wmImg)}>
              <img src="./assets/images/wm2.jpg" alt="What make 1" />
            </div>
            <div>
              <h4 className={clsx(style.wmTitle)}>Product Quality</h4>
              <p className={clsx(style.wmText)}>
                Providing you with confidence and peace of mind. Trust in our
                dedication to quality, and elevate your expectations with every
                purchase.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div style={{ width: "90%" }}>
            <div className={clsx(style.wmImg)}>
              <img src="./assets/images/wm3.jpg" alt="What make 1" />
            </div>
            <div>
              <h4 className={clsx(style.wmTitle)}>Distribution Network</h4>
              <p className={clsx(style.wmText)}>
                Spanning across regions to ensure swift and reliable delivery of
                our products to your doorstep. With strategic partnerships and
                efficient logistics.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WhatMake;
