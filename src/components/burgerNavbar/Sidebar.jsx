import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="menu">
        <div>
          <Menu>
            <Link to="/">
              <button className="menu-item">Home</button>
            </Link>
            <Link to={"/produse"}>
              <button className="menu-item">Produse</button>
            </Link>
            <Link to={"/articole"}>
              <button className="menu-item">Articole</button>
            </Link>
            <Link to={"/despre-noi"}>
              <button className="menu-item">Despre noi</button>
            </Link>
            <Link to={"/contact"}>
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
