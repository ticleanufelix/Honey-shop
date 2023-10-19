import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
function Cart({ onClose }) {
  const { cart, removeFromCart } = useCart();
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };

  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <button className="btn-close btn" onClick={onClose}>
          Închide
        </button>
        {cart.length === 0 ? (
          <p>Coșul este gol</p>
        ) : (
          <>
            <ul className="cart-products">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className="product-image"
                  />
                  <div className="item-in-cart">
                    <span>{item.name}</span>{" "}
                    <span> Cantitate: {item.quantity}</span>{" "}
                    <span>Preț: {item.price * item.quantity} lei</span>
                  </div>
                  <DeleteIcon
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="delete-btn"
                  >
                    Șterge
                  </DeleteIcon>
                </li>
              ))}
            </ul>
            <div className="check-price">
              <p className="total-price">
                Preț Total: {calculateTotalPrice()} lei
              </p>
              <Link to={"/check-out"}>
                <button className="check-out btn">Finalizeaza comanda</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
