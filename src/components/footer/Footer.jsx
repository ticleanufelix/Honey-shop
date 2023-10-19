import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-main">
      <div>
        <h1>Informatii</h1>
        <div className="informatii-footer">
          <a href="">Termeni si conditii</a>
          <a href="">Livrare si modalitate de plata</a>
          <a href="">Politica de confidentialitate</a>
          <a href="">Politica de returnare</a>
        </div>
      </div>
      <div>
        <h1>Ne gasesti si pe</h1>
        <Link to={""}>
          <FacebookIcon />
        </Link>
        <Link to={"/https://www.facebook.com/ticleanu.felyx"}>
          <InstagramIcon />
        </Link>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <MapIcon /> Craiova, Strada caracal nr7
        <PhoneIcon /> 0741105908
        <EmailIcon /> fagureledeaur@yahoo.com
      </div>
    </div>
  );
}

export default Footer;
