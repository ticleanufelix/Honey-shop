import banner from "../../assets/banner.png";
import "./HeroBanner.css";
import "../../index.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function HeroBanner() {
  const { scrollToTop } = useCart();
  return (
    <div className="banner">
      <div>
        <img src={banner} alt="" className="banner-img" />
      </div>
      <div className="banner-right">
        <div className="banner-details-home">
          <h1>Miere naturală direct de la apicultor</h1>
          <p>
            Din 2012 online și de peste 25 de ani offline furnizăm miere
            naturala 100% clienților din toată țara. Comandă acum și lasă-ne să
            fim furnizorul tău de miere de calitate în anii următori. Livrăm
            prin curier in toată țara.
          </p>
        </div>
        <div>
          <Link to={"/produse"} onClick={scrollToTop}>
            <button className="btn-banner btn">Vezi produse</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
