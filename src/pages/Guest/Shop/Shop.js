import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import clsx from "clsx";

import ProductItem from "../../../components/ProductItem";
import { fetchProducts, setPage } from "../../../reducers/productReducer";
import style from "./Shop.module.scss";

function Shop() {
  const dispatch = useDispatch();

  const { products, totalPage, page } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ page }));
  }, [dispatch, page]);

  const handlePageChange = (data) => {
    dispatch(setPage(data.selected + 1));
  };

  return (
    <>
      <Container>
        <div className={style.pageTitle}>
          <h1>Latest Products</h1>
        </div>
        <div>
          <Row>
            {products.map((product, index) => (
              <Col md={3} key={index}>
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            previousLabel={<MdNavigateBefore />}
            nextLabel={<MdNavigateNext />}
            breakLabel={"..."}
            breakClassName={"page-item"}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={clsx(
              style.paginationWrap,
              "pagination justify-content-center"
            )}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </Container>
    </>
  );
}

export default Shop;
