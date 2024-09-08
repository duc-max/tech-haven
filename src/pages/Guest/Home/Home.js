import Hero from "../../../components/Hero";
import Categories from "../../../components/Categories";
import BestSelling from "../../../components/BestSelling/";
import Banner from "../../../components/Banner/Banner";
import LatestProducts from "../../../components/LatestProducts/";
import Blogs from "../../../components/Blogs";
import Cta from "../../../components/Cta/";
import Review from "../../../components/Review/";
import Feature from "../../../components/Feature/";
function Home() {
  return (
    <>
      <div style={{ padding: "80px", backgroundColor: "#fff" }}>
        <Hero />
      </div>

      <>
        <Categories />
      </>

      <>
        <BestSelling />
      </>
      <>
        <Banner />
      </>

      <>
        <LatestProducts />
      </>
      <>
        <Blogs />
      </>
      <>
        <Cta />
      </>
      <>
        <Review />
      </>

      <>
        <Feature />
      </>
    </>
  );
}

export default Home;
