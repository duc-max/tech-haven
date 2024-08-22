import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductItem from "../ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../reducers/productReducer";

function LatestProducts() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <SectionTitle title={"Latest Products"} />
        <Row>
          {products.map((product, index) => {
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
