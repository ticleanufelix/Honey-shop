import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./productsPage.css";
import Products from "../../components/products/Products";
import { useState } from "react";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <Navbar />
      <div className="banner-contact">
        <h1 className="title">Produse</h1>
        <p className="description-banner">Home » Produse</p>
      </div>
      <div className="banner-details">
        <h1>Miere 100% naturală produsă în stupina proprie</h1>
      </div>
      <div className="main-produse">
        <div className="categorii">
          <h1>Categorii</h1>
          <div className="btns-categorii">
            <button
              className="btn-categorii btn"
              onClick={() => handleCategoryClick("miere")}
            >
              Miere
            </button>
            <button
              className="btn-categorii btn"
              onClick={() => handleCategoryClick("hrana")}
            >
              Hrana albine
            </button>
            <button
              className="btn-categorii btn"
              onClick={() => handleCategoryClick("accesorii")}
            >
              Accesorii stup
            </button>
          </div>
        </div>
        <div className="right-produse">
          <Products selectedCategory={selectedCategory} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
