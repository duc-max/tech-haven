import clsx from "clsx";

import style from "./Blogs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <SectionTitle title={"News & Articles"} />
        <Row>
          <Col md={4}>
            <Link>
              <div className={clsx(style.postImg)}>
                <img src="./assets/images/post1.jpg" alt="post" />
              </div>
              <div className={clsx(style.postData)}>
                <span style={{ fontSize: "12px" }}>Apr 1, 2024</span>
                <h4>
                  Choosing the perfect wireless earbuds features to look for
                </h4>
              </div>
            </Link>
          </Col>
          <Col md={4}>
            <Link>
              <div className={clsx(style.postImg)}>
                <img src="./assets/images/post2.jpg" alt="post" />
              </div>
              <div className={clsx(style.postData)}>
                <span style={{ fontSize: "12px" }}>Apr 1, 2024</span>
                <h4>
                  The future of smart home security innovations and trends
                </h4>
              </div>
            </Link>
          </Col>
          <Col md={4}>
            <Link>
              <div className={clsx(style.postImg)}>
                <img src="./assets/images/post3.jpg" alt="post" />
              </div>
              <div className={clsx(style.postData)}>
                <span style={{ fontSize: "12px" }}>Apr 1, 2024</span>
                <h4>
                  DIY tech projects fun and creative ideas for tech enthusiasts
                </h4>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blogs;
