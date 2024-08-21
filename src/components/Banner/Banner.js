import { Col, Container, Row } from "react-bootstrap";
import BannerItem from "./BannerItem";

function Banner() {
  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <Row>
          <Col md={4}>
            <BannerItem color={"#cce3e8"} />
          </Col>
          <Col md={4}>
            <BannerItem color={"#edd5cb"} />
          </Col>
          <Col md={4}>
            <BannerItem color={"#cbeddb"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
