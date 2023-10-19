import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./finishStyles.css";
function Finish() {
  return (
    <div className="finsh-all">
      <Navbar />
      <div className="bug">
        <div className="bee1">
          <div className="eye"></div>
        </div>
        <div className="bee2">
          <div className="wing"></div>
          <div className="wing2"></div>
        </div>
        <div className="black"></div>
      </div>
      <div className="content-finish">
        <p>Felicitari, comanda ta a fost plasata!!</p>
        <Link to={"/produse"}>
          <button className="btn">Intoarce-te la cumparaturi</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Finish;
