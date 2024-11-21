import clsx from "clsx";
import { Container, Col, Row } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";

import ShowNowBtn from "../../../components/Button/ShopNowBtn";
import style from "./Product-detail.module.scss";
import { Tabs } from "antd";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../../components/ProductItem";
import { useEffect, useState } from "react";
import {
  getProductById,
  getProductsBest,
} from "../../../reducers/productReducer";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, setAddSuccess } from "../../../reducers/cartReducer";

const CustomTabs = styled(Tabs)`
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #000 !important;
  }
  :hover {
    color: #000 !important;
  }

  .ant-tabs-tab-btn {
    margin: 0 4px;
  }
  .ant-tabs-tab {
    font-size: 20px;
    color: #999;
  }
  .ant-tabs-ink-bar {
    background-color: #000;
  }

  .ant-tabs-tabpane {
    font-size: 16px;
  }
`;

function ProductDetail() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { productBest, product } = useSelector((state) => state.products);
  const { isLogin } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [cartField, setCartField] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getProductsBest());
    window.scrollTo(0, 0);
    setQuantity(1);
  }, [dispatch, id]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value <= 0) {
      setQuantity(1);
    } else {
      setQuantity(e.target.value);
    }
  };

  const handlePlus = () => {
    setQuantity((pre) => pre + 1);
  };

  const handleMinus = () => {
    if (quantity !== 1 && quantity > 1) {
      setQuantity((pre) => pre - 1);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (isLogin) {
      const user = JSON.parse(localStorage.getItem("user_data"))?.user;
      cartField.productName = product?.name;
      cartField.images = product?.images[0];
      cartField.price = product?.price;
      cartField.quantity = quantity;
      cartField.subTotal = product?.price * quantity;
      cartField.productId = product?._id;
      cartField.userId = user?._id;
      dispatch(addToCart(cartField));
      dispatch(setAddSuccess(true));
      setTimeout(() => {
        dispatch(setAddSuccess(false));
      }, 3000);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Container>
        <div className={clsx(style.productMain)}>
          <Row>
            <Col md={6}>
              <div className={clsx(style.productImgWrap)}>
                <img src={product?.images[0]} alt="product" />
              </div>
            </Col>
            <Col md={6}>
              <div className={clsx(style.productInfo)}>
                <div>
                  <div>
                    <h2 className={clsx(style.productMainName)}>
                      {product?.name}
                    </h2>

                    <div className={clsx(style.priceMain)}>
                      <div className={clsx(style.salePrice)}>
                        $ {product?.price} USD
                      </div>
                      <div className={clsx(style.oldPrice)}></div>
                    </div>
                    <p>{product?.description}</p>
                  </div>
                  <div className={clsx(style.productDataInfo)}>
                    <div className={clsx(style.productInfoList)}>
                      <div className={clsx(style.productDetail)}>
                        <div className={clsx(style.infoTitle)}>Brand:</div>
                        <div className={clsx(style.dataInfo)}>
                          {product?.brand}
                        </div>
                      </div>
                      <div className={clsx(style.productDetail)}>
                        <div className={clsx(style.infoTitle)}>Color:</div>
                        <div className={clsx(style.dataInfo)}>
                          {product?.color}
                        </div>
                      </div>
                      <div className={clsx(style.productDetail)}>
                        <div className={clsx(style.infoTitle)}>Stock:</div>
                        <div className={clsx(style.dataInfo)}>
                          {product?.stock} items
                        </div>
                      </div>
                    </div>

                    <div className={clsx(style.addToCart)}>
                      <form onSubmit={handleAddToCart}>
                        <div className={clsx(style.quantityArea)}>
                          <input
                            type="button"
                            value="-"
                            onClick={handleMinus}
                            className={clsx(style.quantityBtn)}
                          />
                          <input
                            type="text"
                            min="1"
                            value={quantity}
                            onChange={handleChange}
                            className={clsx(style.quantitySelector)}
                          />
                          <input
                            type="button"
                            value="+"
                            onClick={handlePlus}
                            className={clsx(style.quantityBtn)}
                          />
                        </div>

                        <ShowNowBtn
                          title="Add to Cart"
                          icon={<IoCartOutline style={{ fontSize: "20px" }} />}
                          add={true}
                        />
                      </form>
                    </div>
                  </div>

                  <div className={clsx(style.productInformation)}>
                    <div className={clsx(style.productDetail)}>
                      <div className={clsx(style.infoTitle)}>SKU:</div>
                      <div className={clsx(style.dataInfo)}>{product?.sku}</div>
                    </div>
                    <div className={clsx(style.productDetail)}>
                      <div className={clsx(style.infoTitle)}>Category: </div>
                      <div className={clsx(style.dataInfo)}>
                        {product?.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className={clsx(style.productDetails)}>
        <Container>
          <CustomTabs
            defaultActiveKey="1"
            items={[
              {
                label: "Product Overview",
                key: "1",
                children: <>{product?.overview}</>,
              },
              {
                label: "Shipping Information",
                key: "2",
                children:
                  "At senectus velit feugiat tortor est volutpat hendrerit orci. Tortor adipiscing proin orci euismod accumsan cursus felis morbi. Non dignissim sapien nec porttitor tellus. Eget feugiat sed sapien et. Faucibus sollicitudin tortor vestibulum tellus neque in turpis. Massa ipsum felis fermentum tortor mattis fermentum massa. Diam magna pharetra ipsum porta commodo tristique quam. Odio cras sed dis molestie vehicula amet. Non libero tortor tellus viverra viverra nulla amet aliquet. Dignissim aliquet magna vivamus et ac pellentesque. Nulla accumsan turpis vel convallis. Tellus pulvinar diam ultricies sed id sed aenean. Est enim commodo pharetra diam. Convallis leo neque faucibus et convallis vitae rhoncus.",
              },
            ]}
          />
        </Container>
      </div>
      <div style={{ marginBottom: "150px" }}>
        <Container>
          <SectionTitle title={"Similar Products"} disable={true} />
          <div>
            <Row>
              {productBest.map((product, index) => {
                return (
                  <Col md={3} key={product?._id}>
                    <ProductItem product={product} />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProductDetail;
