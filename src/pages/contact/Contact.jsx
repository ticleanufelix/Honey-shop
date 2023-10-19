import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./contact.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="all">
      <Navbar />
      <div className="banner-contact">
        <h1 className="title">Contact</h1>
        <p className="description-banner">Home » Contact</p>
      </div>

      <div className="cards">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pentru livrări, contactează-ne
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ticleanu Felix : 0741 105 908
              </Typography>
              <Typography variant="body2" color="text.secondary">
                fagureledeaur@yahoo.com
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ne gasiti in Craiova
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Strada Caracal nr 7
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <form className="form">
        <h2>Contacteaza-ne</h2>
        <p type="Nume:">
          <input></input>
        </p>
        <p type="Email:">
          <input></input>
        </p>
        <p type="Mesaj:">
          <input></input>
        </p>
        <button className="btn">Trimite mesaj</button>
      </form>
      <div className="order-despre-noi">
        <h1>Comandă acum miere naturală 100% direct de la apicultor.</h1>
        <p>
          Livrare personală în București in Vatra Luminoasa, 26 și prin curier
          sau Poșta Română, în toată ţara.
        </p>
        <Link to={"/produse"}>
          <button className="btn-despre-noi btn">Vezi toate produsele</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
