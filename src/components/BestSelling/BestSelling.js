import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";
import SectionTitle from "../SectionTitle/SectionTitle";

function BestSelling() {
  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <SectionTitle title={"Best Selling Products"} />
        <div>
          <Row>
            <Col md={3}>
              <Link>
                <ProductItem />
              </Link>
            </Col>
            <Col md={3}>
              <Link>
                <ProductItem />
              </Link>
            </Col>
            <Col md={3}>
              <Link>
                <ProductItem />
              </Link>
            </Col>
            <Col md={3}>
              <Link>
                <ProductItem />
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default BestSelling;
