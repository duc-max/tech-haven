import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsLatest } from "../../reducers/productReducer";

function LatestProducts() {
  const dispatch = useDispatch();
  const { productsLatest } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsLatest());
  }, [dispatch]);

  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <SectionTitle title={"Latest Products"} />
        <Row>
          {productsLatest.map((product, index) => {
            return (
              <Col md={3} key={index}>
                <ProductItem product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default LatestProducts;
