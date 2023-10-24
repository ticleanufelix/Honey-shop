import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../context/CartContext";
const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollToTop } = useCart();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="menu">
        <div>
          <Menu>
            <Link to="/" onClick={scrollToTop}>
              <button className="menu-item">Home</button>
            </Link>
            <Link to={"/produse"} onClick={scrollToTop}>
              <button className="menu-item">Produse</button>
            </Link>
            <Link to={"/articole"} onClick={scrollToTop}>
              <button className="menu-item">Articole</button>
            </Link>
            <Link to={"/despre-noi"} onClick={scrollToTop}>
              <button className="menu-item">Despre noi</button>
            </Link>
            <Link to={"/contact"} onClick={scrollToTop}>
              <button className="menu-item">Contact</button>
            </Link>
          </Menu>
        </div>
        <div className="cart-btn-sidebar" onClick={toggleModal}>
          <ShoppingCartIcon fontSize="large" color="warning" />
        </div>

        {isModalOpen && <Cart onClose={toggleModal} />}
      </div>
    </>
  );
};

export default Sidebar;
