import "./products.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../productsData";
import { useCart } from "../../context/CartContext";

function Products({ selectedCategory, limit }) {
  const { scrollToTop } = useCart();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    let filteredProducts = productsData.filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    );
    if (limit) {
      filteredProducts = filteredProducts.slice(0, limit);
    }
    setProducts(filteredProducts);
  }, [selectedCategory, limit]);

  return (
    <>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="card-main">
            <article className="card">
              <img
                className="card__background"
                src={product.imageURL}
                alt={product.name}
                width="1920"
                height="2193"
              />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{product.name}</h2>
                  <p className="card__description">{product.description}</p>
                  <p className="pret">Pret: {product.price} lei </p>
                </div>
                <div className="btns">
                  <Link to={`/product/${product.id}`} onClick={scrollToTop}>
                    <button className="card__button">Afla mai multe</button>
                  </Link>
                  <button
                    className="card__button"
                    onClick={() => addToCart(product)}
                  >
                    Adauga in cos
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
