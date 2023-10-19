import logo from "../../assets/logo.png";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import SidesBar from "../burgerNavbar/SidesBar";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <SidesBar />
      <div className="nav-bar-desktop">
        <div className="pages">
          <Link to={"/"}>
            <button className="btn-img">
              <img src={logo} alt="" className="img-navbar" />
            </button>
          </Link>
          <Link to="/">
            <button className="btn-nav">Home</button>
          </Link>
          <Link to={"/produse"}>
            <button className="btn-nav">Produse</button>
          </Link>
          <Link to={"/articole"}>
            <button className="btn-nav">Articole</button>
          </Link>
          <Link to={"/despre-noi"}>
            <button className="btn-nav">Despre noi</button>
          </Link>
          <Link to={"/contact"}>
            <button className="btn-nav">Contact</button>
          </Link>
          <div className="cart-btn" onClick={toggleModal}>
            <ShoppingCartIcon fontSize="large" color="warning" />
          </div>

          {isModalOpen && <Cart onClose={toggleModal} />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
