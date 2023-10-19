import { Toaster } from "react-hot-toast";
import AboutUs from "../components/aboutUs/AboutUs";
import Footer from "../components/footer/Footer";
import HeroBanner from "../components/heroBanner/HeroBanner";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";

function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Toaster />
      <Products limit={6} />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home;
