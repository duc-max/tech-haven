import clsx from "clsx";

import style from "./Feature.module.scss";
import { Container } from "react-bootstrap";

function Feature() {
  return (
    <section className={clsx(style.feature)}>
      <Container>
        <div className={clsx(style.featureWrap)}>
          <div className={clsx(style.featureBlock)}>
            <img src="./assets/images/tracking.svg" alt="feature" />
            <div>
              <div className={clsx(style.featureTitle)}>Order Tracking</div>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "150%",
                }}
              >
                Track real time your order
              </div>
            </div>
          </div>
          <div className={clsx(style.featureBlock)}>
            <img src="./assets/images/shipping.svg" alt="feature" />
            <div>
              <div className={clsx(style.featureTitle)}>Free Shipping</div>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "150%",
                }}
              >
                You will love at great low prices
              </div>
            </div>
          </div>
          <div className={clsx(style.featureBlock)}>
            <img src="./assets/images/payment.svg" alt="feature" />
            <div>
              <div className={clsx(style.featureTitle)}>Flexible Payment</div>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "150%",
                }}
              >
                Pay with Multiple Credit Cards
              </div>
            </div>
          </div>
          <div className={clsx(style.featureBlock)}>
            <img src="./assets/images/shipping-1.svg" alt="feature" />
            <div>
              <div className={clsx(style.featureTitle)}>Fast Delivery</div>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "150%",
                }}
              >
                Experience the joy of fast shipping
              </div>
            </div>
          </div>
          <div className={clsx(style.featureBlock)}>
            <img src="./assets/images/time.svg" alt="feature" />
            <div>
              <div className={clsx(style.featureTitle)}>Premium Support</div>
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "150%",
                }}
              >
                Outstanding premium support
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Feature;
