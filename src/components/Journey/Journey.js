import { Col, Container, Row } from "react-bootstrap";
import clsx from "clsx";

import style from "./Journey.module.scss";
function Journey() {
  return (
    <div className={clsx(style.journeyWrap)}>
      <div className={clsx(style.journeyBlock)}>
        <div className={clsx(style.journeyData)}>
          <h4>Our Vision</h4>
          <p>
            We strive to be pioneers in our field, leading the way with
            groundbreaking solutions that transform lives and shape the future.
            Through relentless dedication to excellence, creativity, and
            sustainability.
          </p>
        </div>
      </div>
      <div className={clsx(style.journeyBlock, style.journeyMission)}>
        <div className={clsx(style.journeyData)}>
          <h4>Our Mission</h4>
          <p>
            We are committed to providing exceptional products, services, and
            support that enhance the lives of our customers and contribute to
            their success. With a focus on customer satisfaction and integrity.
          </p>
        </div>
      </div>
      <div className={clsx(style.journeyImg)}>
        <img src="./assets/images/j1.jpg" alt="j1" />
      </div>
      <div className={clsx(style.journeyImg)}>
        <img src="./assets/images/j2.jpg" alt="j1" />
      </div>
      <div className={clsx(style.journeyBlock, style.journeyMission)}>
        <div className={clsx(style.journeyData)}>
          <h4>Our Innovation</h4>
          <p>
            Our commitment to innovation drives us to explore new ideas, embrace
            emerging technologies, and challenge conventional thinking. By
            fostering a culture of creativity, collaboration & experimentation.
          </p>
        </div>
      </div>

      <div className={clsx(style.journeyBlock)}>
        <div className={clsx(style.journeyData)}>
          <h4>Our Impowerment</h4>
          <p>
            Our mission is to empower individuals, businesses, and communities
            through technology, education, and opportunity. We are committed to
            providing the tools, resources, and support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Journey;
