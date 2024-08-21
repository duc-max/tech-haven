import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductItem from "../ProductItem";

function LatestProducts() {
  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <SectionTitle title={"Latest Products"} />

        <Row>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
          <Col md={3}>
            <ProductItem />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LatestProducts;
