import clsx from "clsx";
import styles from "./DefaultLayout.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <Header />
        <div>
          <div className={clsx(styles.content)}>{children}</div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
