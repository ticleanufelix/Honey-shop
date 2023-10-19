import { useParams } from "react-router-dom";
import productsData from "../../components/productsData";
import "./product.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Product() {
  const { productId } = useParams();
  const product = productsData.find((p) => p.id === Number(productId));
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  function addQty() {
    return setQty(qty + 1);
  }

  function deletQty() {
    if (qty > 1) {
      return setQty(qty - 1);
    }
  }

  if (!product) {
    return <div>Produsul nu a fost găsit</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-main">
        <img src={product.imageURL} alt="" className="img-product" />
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <h1>Disponibilitate: In stoc</h1>
          <div className="qty">
            <span onClick={deletQty}>
              <RemoveIcon />
            </span>
            <p>{qty}</p>
            <span onClick={addQty}>
              <AddIcon />
            </span>
            <button
              className="btn-product btn"
              onClick={() => addToCart(product, qty)}
            >
              Adauga in cos
            </button>
          </div>
          <p>Preț: {product.price} lei</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
