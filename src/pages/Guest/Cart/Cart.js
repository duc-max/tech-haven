import clsx from "clsx";

import style from "./Cart.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchCart,
  minusItem,
  plusItem,
  removeItem,
} from "../../../reducers/cartReducer";
import config from "../../../config";

function Cart() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  const [cartUser, setCartUser] = useState([]);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user_data"))?.user;
    if (user) {
      setCartUser(carts.filter((cart) => cart.userId === user._id));
    }
  }, [carts]);

  const handleSubmitChangeQuantity = (e, productId, userId) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.name;
    const data = {
      productId,
      userId,
    };

    if (action === "increase") {
      dispatch(plusItem(data));
    } else {
      dispatch(minusItem(data));
    }
  };

  const handleRemove = async (uid, pid) => {
    await dispatch(removeItem({ uid, pid }));
    dispatch(fetchCart());
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className={clsx(style.cartItemWrap)}>
            <div className={clsx(style.cartItemBlock)}>
              <div className={clsx(style.cartTitle)}>
                <h3>
                  <strong>Shopping cart:</strong>
                </h3>
                <span className={clsx(style.cartCount)}>
                  {cartUser.length} item
                </span>
              </div>
              <div className={clsx(style.cartItem)}>
                {cartUser.length > 0 ? (
                  cartUser.map((cart, index) => {
                    return (
                      <ul key={cart._id}>
                        <li className={clsx(style.itemInfo)}>
                          <div className={clsx(style.itemImg)}>
                            <Link>
                              <img src={cart.images} alt="product" />
                            </Link>
                          </div>
                          <div className={clsx(style.itemTitle)}>
                            <Link>{cart.productName}</Link>

                            <div className={clsx(style.groupItemOption)}>
                              <span className={clsx(style.itemOption)}>
                                Shock price (excluding additional offers)
                              </span>
                              <span className={clsx(style.itemOption)}>
                                <span>
                                  <span className={clsx(style.money)}>
                                    {cart.price} $
                                  </span>
                                  <del>26,990,000₫</del>
                                </span>
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className={clsx(style.itemQuantity)}>
                          <div className={clsx(style.quantityArea)}>
                            <form
                              onSubmit={(e) =>
                                handleSubmitChangeQuantity(
                                  e,
                                  cart.productId,
                                  cart.userId
                                )
                              }
                            >
                              <input
                                type="submit"
                                value="-"
                                name="decrease"
                                className={clsx(style.quantityBtn)}
                              />
                              <input
                                type="text"
                                value={cart.quantity}
                                readOnly
                                className={clsx(style.quantitySelector)}
                              />
                              <input
                                type="submit"
                                value="+"
                                name="increase"
                                className={clsx(style.quantityBtn)}
                              />
                            </form>
                          </div>
                          <div className={clsx(style.itemRemove)}>
                            <button
                              onClick={() => {
                                handleRemove(cart.userId, cart.productId);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </li>

                        <li className={clsx(style.itemPrice)}>
                          <span className={clsx(style.money)}>
                            {cart.subTotal.toFixed(2)} $
                          </span>
                        </li>
                      </ul>
                    );
                  })
                ) : (
                  <div className={clsx(style.cartEmpty, "text-center")}>
                    <span>
                      Your shopping cart is empty. Please buy more products
                      <Link to={config.router.shop}> here</Link>.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className={clsx(style.cartItemWrap)}>
            <div className={clsx(style.cartItemBlock)}>
              <div className={clsx(style.orderTitle)}>
                <h4>Order information</h4>
              </div>
              <div className={clsx(style.orderTotal)}>
                <p>
                  Total:
                  <span className={clsx(style.totalMoney)}>
                    {cartUser
                      .reduce((pre, current) => {
                        return pre + current.subTotal;
                      }, 0)
                      .toFixed(2)}{" "}
                    $
                  </span>
                </p>
              </div>
              <div className={clsx(style.orderText)}>
                <p></p>
              </div>
              <div className={clsx(style.orderBtn)}>
                <button type="submit">Pay Now</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
