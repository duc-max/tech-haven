import clsx from "clsx";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  fetchCart,
  removeAllItem,
} from "../../../reducers/cartReducer";
import { loadStripe } from "@stripe/stripe-js";

import ItemCheckout from "../../../components/ItemCheckout/ItemCheckout";
import config from "../../../config";
import style from "./Checkout.module.scss";

function Checkout() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  const { isLogin } = useSelector((state) => state.users);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [cartUser, setCartUser] = useState([]);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    fetchAddress();
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user_data"))?.user;
    if (user) {
      setCartUser(carts.filter((cart) => cart.userId === user._id));
      setUser(user);
    }
  }, [carts]);

  useEffect(() => {
    if (province) {
      const selectedProvince = provinces.find((prov) => prov.Name === province);
      setDistricts(selectedProvince.Districts);
    }
    if (district && districts) {
      const selectedDistrict = districts.find((prov) => prov.Name === district);
      setWards(selectedDistrict?.Wards);
    }
  }, [province, provinces, district, districts]);
  const fetchAddress = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    );

    if (res && res.data) {
      setProvinces(res.data);
    }
  };

  const totalBill = () => {
    return cartUser
      .reduce((pre, current) => {
        return pre + current.subTotal;
      }, 0)
      .toFixed(2);
  };
  const handlePayment = async (e) => {
    e.preventDefault();

    if (address) {
      const stripe = await loadStripe(
        "pk_test_51PzvPL2M4x62CqEYHNao7Tb4bOfchM5OAwReMsT3q6lw33JxGA7X3bfKq9biFSCMV0ZujCbzmfh0WrhzMXGyDeRY00zEewLc3W"
      );
      const body = {
        products: cartUser,
      };
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_CART_CHECKOUT}`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      const session = await response.json();

      const user = JSON.parse(localStorage.getItem("user_data")).user;
      const order = {
        customerName: user.name,
        items: cartUser,
        totalAmount: totalBill(),
        address: address,
        status: "Delivered",
        paymentMethod: "banking",
      };
      dispatch(addOrder(order));
      dispatch(removeAllItem(user._id));
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } else {
      setError("Please enter shipping address");
    }
  };

  return (
    <div className={clsx(style.checkoutWrap)}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={clsx(style.checkoutBlock)}>
              <div>
                <Link to={config.router.home}>
                  <div className={clsx(style.logo)}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopEqF2dS0pT5qCc8FOUivVb1_EUcYhKAfng&s"
                      alt="logo"
                    />
                  </div>
                </Link>
              </div>
              <ul className={clsx(style.breadcrumb)}>
                <li className={clsx(style.breadcrumbItem)}>
                  <Link to={config.router.cart}>Cart</Link>
                </li>
                <li className={clsx(style.breadcrumbCurrent)}>
                  Delivery information
                </li>
              </ul>
              <div className={clsx(style.mainContent)}>
                <div className={clsx(style.section)}>
                  <div className={clsx(style.sectionHeader)}>
                    <h2>Delivery information</h2>
                  </div>
                  <p>
                    Already have an account?{" "}
                    <Link to={config.router.login}> Login</Link>
                  </p>

                  <div>
                    <Row>
                      <div className={clsx(style.formGroup)}>
                        <input
                          type="text"
                          className={clsx(style.formInput, {
                            [style.disableInput]: isLogin,
                          })}
                          value={user?.name}
                          readOnly
                        />
                        <span
                          className={clsx(style.formLabel, style.activeLabel)}
                        >
                          Name
                        </span>
                      </div>
                      <Col md={7}>
                        <div className={clsx(style.formGroup)}>
                          <input
                            type="email"
                            className={clsx(style.formInput, {
                              [style.disableInput]: isLogin,
                            })}
                            value={user?.email}
                            readOnly
                          />
                          <span
                            className={clsx(style.formLabel, style.activeLabel)}
                          >
                            Email
                          </span>
                        </div>
                      </Col>
                      <Col md={5}>
                        <div className={clsx(style.formGroup)}>
                          <input
                            type="text"
                            className={clsx(style.formInput, {
                              [style.disableInput]: isLogin,
                            })}
                            value={user?.phone}
                            readOnly
                          />
                          <span
                            className={clsx(style.formLabel, style.activeLabel)}
                          >
                            Phone
                          </span>
                        </div>
                      </Col>

                      <div className={clsx(style.formGroup)}>
                        <input
                          type="text"
                          className={clsx(style.formInput)}
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                        <span
                          className={clsx(style.formLabel, style.activeLabel)}
                        >
                          Address
                        </span>
                        {error && <span style={{ color: "red" }}>{error}</span>}
                      </div>
                      <Col md={4}>
                        <div className={clsx(style.formGroup)}>
                          <select
                            value={province}
                            onChange={(e) => {
                              setProvince(e.target.value);
                            }}
                            className={clsx(style.formInput)}
                          >
                            <option value="">Province/City</option>
                            {provinces.map((province, index) => {
                              return (
                                <option key={index} value={province.Name}>
                                  {province.Name}
                                </option>
                              );
                            })}
                          </select>
                          <span
                            className={clsx(style.formLabel, style.activeLabel)}
                          >
                            Province/City
                          </span>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className={clsx(style.formGroup)}>
                          <select
                            value={district}
                            onChange={(e) => {
                              setDistrict(e.target.value);
                            }}
                            className={clsx(style.formInput)}
                          >
                            <option value="">District</option>
                            {districts &&
                              districts.map((district, index) => {
                                return (
                                  <option key={index} value={district.Name}>
                                    {district.Name}
                                  </option>
                                );
                              })}
                          </select>
                          <span
                            className={clsx(style.formLabel, style.activeLabel)}
                          >
                            District
                          </span>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className={clsx(style.formGroup)}>
                          <select
                            value={ward}
                            onChange={(e) => {
                              setWard(e.target.value);
                            }}
                            className={clsx(style.formInput)}
                          >
                            <option value="">Ward/Commune</option>
                            {wards &&
                              wards.map((ward, index) => {
                                return (
                                  <option key={index} value={ward.Name}>
                                    {ward.Name}
                                  </option>
                                );
                              })}
                          </select>
                          <span
                            className={clsx(style.formLabel, style.activeLabel)}
                          >
                            Ward/Commune
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className={style.paymentWrap}>
                  <div className={clsx(style.sectionHeader)}>
                    <h2>Payment method</h2>
                  </div>
                  <div className={clsx(style.paymentMethodWrap)}>
                    <div className={clsx(style.radioWrapper)}>
                      <label>
                        <div className={clsx(style.radioCheck)}>
                          <input name="payment_check" type="radio" />
                        </div>
                        <div className={clsx(style.radioMethod)}>
                          <img src="./assets/images/cod.svg" alt="item" />

                          <div>COD Payment (Receive goods after 3-5 days)</div>
                        </div>
                      </label>
                    </div>
                    <div className={clsx(style.radioWrapper)}>
                      <label>
                        <div className={clsx(style.radioCheck)}>
                          <input name="payment_check" type="radio" />
                        </div>
                        <div className={clsx(style.radioMethod)}>
                          <img src="./assets/images/other.svg" alt="item" />

                          <div>Banking</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={style.stepFooter}>
                  <Link to={config.router.cart}>Cart</Link>

                  <form onSubmit={handlePayment}>
                    <input type="hidden" />
                    <button>Complete order</button>
                  </form>
                </div>
                <div className={style.mainFooter}>Powered by TechHaven</div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className={clsx(style.sideBar)}>
              <div className={clsx(style.cartItemWrap)}>
                <div>
                  {cartUser &&
                    cartUser.map((item, index) => {
                      return <ItemCheckout product={item} key={index} />;
                    })}
                </div>
                <div className={clsx(style.discount)}>
                  <Row>
                    <Col md={8}>
                      <div className={clsx(style.formGroup)}>
                        <input type="text" className={clsx(style.formInput)} />
                        <span
                          className={clsx(style.formLabel, style.activeLabel)}
                        >
                          Discount code
                        </span>
                      </div>
                    </Col>
                    <Col md={4}>
                      <button
                        className={clsx(style.btnDiscount, style.btnDisable)}
                      >
                        Apply
                      </button>
                    </Col>
                  </Row>
                </div>
                <div className={clsx(style.subtotal)}>
                  <div className={clsx(style.wrapCost)}>
                    <span>Subtotal </span>
                    <span>{totalBill()} $</span>
                  </div>
                  <div className={clsx(style.wrapCost)}>
                    <span>Shipping fee </span>
                    <span>-</span>
                  </div>
                </div>

                <div className={clsx(style.subtotal)}>
                  <div className={clsx(style.wrapCost)}>
                    <span className={clsx(style.total)}>Total </span>
                    <span className={clsx(style.price)}>{totalBill()} $</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
