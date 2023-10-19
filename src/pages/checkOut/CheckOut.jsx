import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useCart } from "../../context/CartContext";
import "./checkOut.css";

function CheckOut() {
  const { cart, resetCart } = useCart();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.quantity;
    }

    return totalPrice;
  };
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="left">
          <form className="second-form">
            <label htmlFor="fname">Nume</label>
            <input className="input" type="text" id="fname" name="fname" />
            <label htmlFor="lname">Prenume</label>
            <input className="input" type="text" id="lname" name="lname" />
            <label htmlFor="adress">Adresa</label>
            <input className="input" type="text" id="adress" name="adress" />
            <label htmlFor="adressS">Localitatea</label>
            <input className="input" type="text" id="adressS" name="adressS" />
            <label htmlFor="adressJ">Judetul</label>
            <input className="input" type="text" id="adressJ" name="adressJ" />
            <label htmlFor="adressC">Cod postal</label>
            <input className="input" type="text" id="adressC" name="adressC" />
            <label htmlFor="adressT">Telefon</label>
            <input className="input" type="text" id="adressT" name="adressT" />
            <label htmlFor="adressM">Adresa email</label>
            <input className="input" type="text" id="adressM" name="adressM" />
          </form>
        </div>
        <div className="right">
          <ul className="cart-products">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.imageURL}
                  alt={item.name}
                  className="product-image"
                />
                <span>{item.name}</span>
                <span> - Cantitate: {item.quantity}</span>
                <span>- Preț: {item.price * item.quantity} lei</span>
              </li>
            ))}
          </ul>
          <div className="price-btn">
            <p>Preț Total: {calculateTotalPrice()} lei</p>
            <Link to={"/finish"}>
              <button className=" btn" onClick={resetCart}>
                Finalizare comanda
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheckOut;
