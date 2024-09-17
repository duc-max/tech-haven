import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../ProductItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getProductsBest } from "../../reducers/productReducer";

function BestSelling() {
  const dispatch = useDispatch();
  const { productBest } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsBest());
  }, [dispatch]);
  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <SectionTitle title={"Best Selling Products"} />
        <div>
          <Row>
            {productBest.map((product, index) => {
              return (
                <Col md={3} key={index}>
                  <ProductItem product={product} />
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default BestSelling;
