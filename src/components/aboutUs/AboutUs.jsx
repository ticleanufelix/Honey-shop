import { Link } from "react-router-dom";
import aboutsUS from "../../assets/despre-noi.png";
import "./aboutUS.css";

function AboutUs() {
  return (
    <div className="about-us-main">
      <div>
        <img src={aboutsUS} alt="" className="img-about-us" />
      </div>
      <div className="about-us-desciption">
        <h1>Cine suntem?</h1>
        <p>
          Noi suntem Gabriel și Angelica Ghițoiu și de mai bine de 30 de ani ne
          dedicăm timpul și eforturile pasiunii noastre, apicultura. În prezent,
          avem propria stupină formată din aproximativ 90 de familii de albine
          pe care le îngrijim cu mare bucurie. Suntem recunoscători că în
          ultimii ani am avut posibilitatea să oferim mierea produsă la noi în
          stupină cât mai multor oameni și îți mulțumim că ne vizitezi.
        </p>
        <Link to={"/despre-noi"}>
          <button className="btn-about-us btn">Mai multe despre noi</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
