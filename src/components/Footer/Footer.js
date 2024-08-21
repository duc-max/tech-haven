import { Container } from "react-bootstrap";
import clsx from "clsx";

import style from "./Footer.module.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer style={{ backgroundColor: "#000" }}>
      <Container>
        <div className={clsx(style.footerWrap)}>
          <div className={clsx(style.footerData)}>
            <div>
              <div className={clsx(style.footerTitle)}>Where abouts</div>
              <p className={clsx(style.address)}>
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
            <div>
              <div className={clsx(style.footerTitle)}>Mailbox</div>
              <a
                href="mailto:ductmhe160745@fpt.edu.vn"
                className={clsx(style.footerLink)}
              >
                ductmhe160745@fpt.edu.vn
              </a>
            </div>
            <div>
              <div className={clsx(style.footerTitle)}>Contact</div>
              <a href="tel:0869631212" className={clsx(style.footerLink)}>
                0869631212
              </a>
            </div>
          </div>
          <div className={clsx(style.footerMenuWrap)}>
            <div className={clsx(style.footerMenu)}>
              <div className={clsx(style.footerTitle)}>Pages</div>
              <div className={clsx(style.footerLinkWrap)}>
                <Link className={clsx(style.footerLink)}>About us</Link>
                <Link className={clsx(style.footerLink)}>Categories</Link>
                <Link className={clsx(style.footerLink)}>Shop</Link>
                <Link className={clsx(style.footerLink)}>Contact us</Link>
              </div>
            </div>
            <div className={clsx(style.footerMenu)}>
              <div className={clsx(style.footerTitle)}>Resource</div>
              <div className={clsx(style.footerLinkWrap)}>
                <Link className={clsx(style.footerLink)}>Blogs</Link>
                <Link className={clsx(style.footerLink)}>FAQ</Link>
                <Link className={clsx(style.footerLink)}>Reviews</Link>
              </div>
            </div>
            <div className={clsx(style.footerMenu)}>
              <div className={clsx(style.footerTitle)}>Utilities</div>
              <div className={clsx(style.footerLinkWrap)}>
                <Link className={clsx(style.footerLink)}>Style</Link>
                <Link className={clsx(style.footerLink)}>Guide</Link>
                <Link className={clsx(style.footerLink)}>Error 404</Link>
                <Link className={clsx(style.footerLink)}>Changelog</Link>
                <Link className={clsx(style.footerLink)}>Return</Link>
                <Link className={clsx(style.footerLink)}>Policy</Link>
              </div>
            </div>
            <div className={clsx(style.footerMenu)}>
              <div className={clsx(style.footerTitle)}>Connected</div>
              <div className={clsx(style.footerLinkWrap)}>
                <a href className={clsx(style.footerLink)}>
                  Instagram
                </a>
                <a href className={clsx(style.footerLink)}>
                  Facebook
                </a>
                <a href className={clsx(style.footerLink)}>
                  YouTube
                </a>
                <a href className={clsx(style.footerLink)}>
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className={clsx(style.footerFrom)}>
            <div className={clsx(style.footerTitle)}>Connected</div>
            <div className={clsx(style.newsletter)}>
              <form className={clsx(style.newsletterForm)}>
                <input
                  className={clsx(style.newsletterInput)}
                  placeholder="Enter your name"
                  maxLength={256}
                  type="text"
                  name="name"
                />
                <input
                  className={clsx(style.newsletterInput)}
                  placeholder="Enter email"
                  maxLength={256}
                  type="email"
                  name="email"
                />
                <input
                  className={clsx(style.newsletterBtn)}
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </Container>

      <div className={clsx(style.footerBottom)}>
        <Container>
          <div className={clsx(style.footerText)}>
            <div>© 2024 HiTech. All rights reserved.</div>
            <div className={clsx(style.footerBtnLink)}>
              <Link className={clsx(style.footerLink)}>Privacy Policy</Link>
              <div className={clsx(style.dot)}></div>
              <Link className={clsx(style.footerLink)}>Terms & Conditions</Link>
            </div>
            <div>Designed by Nixar. Powered by Webflow. Webflow Icon</div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
