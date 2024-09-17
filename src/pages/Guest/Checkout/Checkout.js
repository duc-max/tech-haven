import clsx from "clsx";
import style from "./Checkout.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import config from "../../../config";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemCheckout from "../../../components/ItemCheckout/ItemCheckout";
import router from "../../../config/router";

function Checkout() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  useEffect(() => {
    fetchAddress();
  }, []);

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
                        <input type="text" className={clsx(style.formInput)} />
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
                            className={clsx(style.formInput)}
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
                            className={clsx(style.formInput)}
                          />
                          <span
                            className={clsx(style.formLabel, style.activeLabel)}
                          >
                            Phone
                          </span>
                        </div>
                      </Col>

                      <div className={clsx(style.formGroup)}>
                        <input type="text" className={clsx(style.formInput)} />
                        <span
                          className={clsx(style.formLabel, style.activeLabel)}
                        >
                          Address
                        </span>
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
                  <form>
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
                <ItemCheckout />
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
                    <span>415,000₫</span>
                  </div>
                  <div className={clsx(style.wrapCost)}>
                    <span>Shipping fee </span>
                    <span>-</span>
                  </div>
                </div>

                <div className={clsx(style.subtotal)}>
                  <div className={clsx(style.wrapCost)}>
                    <span className={clsx(style.total)}>Total </span>
                    <span className={clsx(style.price)}>415,000₫</span>
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
