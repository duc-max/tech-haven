import clsx from "clsx";

import style from "./Categories.module.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <section className={clsx(style.productCategory)}>
      <Container>
        <div className={clsx(style.categoryWrap)}>
          <Link>
            <img src="./assets/images/mobile.svg" alt="Phone" />
            <div>Smartphones</div>
          </Link>
          <Link>
            <img src="./assets/images/watch.svg" alt="watch" />
            <div>Smartwatch</div>
          </Link>
          <Link>
            <img src="./assets/images/games.svg" alt="games" />
            <div>Games & video</div>
          </Link>
          <Link>
            <img src="./assets/images/home.svg" alt="home" />
            <div>Home Automation</div>
          </Link>
          <Link>
            <img src="./assets/images/headphones.svg" alt="Headphones" />
            <div>Headphones</div>
          </Link>
          <Link>
            <img src="./assets/images/laptop.svg" alt="Laptops" />
            <div>Laptops</div>
          </Link>
          <Link>
            <img src="./assets/images/tech.svg" alt="Tech Gadget" />
            <div>Tech Gadget</div>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Categories;
