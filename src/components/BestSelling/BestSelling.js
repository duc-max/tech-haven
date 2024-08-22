import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../reducers/productReducer";

function BestSelling() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  const sortedProducts = [...products].sort((a, b) => b?.stock - a?.stock);

  return (
    <section style={{ marginBottom: "150px" }}>
      <Container>
        <SectionTitle title={"Best Selling Products"} />
        <div>
          <Row>
            {sortedProducts.slice(0, 4).map((product, index) => {
              return (
                <Col md={3} key={index}>
                  <Link>
                    <ProductItem product={product} />
                  </Link>
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
