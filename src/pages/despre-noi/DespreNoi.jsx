import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./despreNoi.css";
import { useCart } from "../../context/CartContext";

function AboutUs() {
  const { scrollToTop } = useCart();
  return (
    <div>
      <Navbar />
      <div className="banner-contact">
        <h1 className="title">Despre noi</h1>
        <p className="description-banner">Home » Despre noi</p>
      </div>
      <div className="descriere-despre-noi">
        <h1>Povestea noastră</h1>
        <h3>Totul a început din pasiune și curiozitate</h3>
        <p>
          Povestea Stupului Vesel începe în sudul Olteniei, în Comuna Maglavit
          din județul Dolj. Din pasiune pentru apicultură, eu, Gabriel, alături
          de soția mea, Angelica, am început să creștem 2 familii de albine în
          anul 1987. Știam că mierea de albine naturală are calități benefice
          pentru sănătate, așa că ne-am hotărât să o producem chiar noi.
        </p>
        <p>
          Chiar dacă începuturile au fost mai grele, fiind un domeniu complet
          nou pentru noi, pasiunea și dorința de a obține un produs complet
          natural și sănătos ne-au motivat să învățăm tot mai mult. Am avut
          greutăți, dar am deprins mereu ceva folositor din ele. De exemplu,
          înțepăturile albinelor erau o adevărată bătaie de cap, însă așa am
          descoperit că veninul lor poate trata o mulțime de boli.
        </p>
        <h3>Apicultura ca stil de viață</h3>
        <p>
          Fără să ne dăm seama, o simplă pasiune s-a transformat în stil de
          viață pentru amândoi. Familiile de albine s-au tot înmulțit și
          apicultura a început să ne ocupe mai bine de jumătate din timp.
          Stupina se află chiar în livada noastră, aproape de o pădure de
          salcâmi, la 2 km de malul Dunării.
        </p>
        <p>
          În fiecare primăvară, după ce floarea de salcâm din Maglavit se
          ofilește, plecăm cu familiile de albine în pastorală în zona
          Râmnicu-Vâlcea. Apoi, la sfârșitul lui iunie-începutul lui iulie
          pornim către un lan de floarea-soarelui, de unde obținem mierea de
          floarea-soarelui. Pe lângă aceste 2 tipuri de miere, familiile noastre
          de albine mai produc și miere polifloră cu o aromă specială, din flora
          spontană din jurul lacurilor sau pădurilor din zonă.
        </p>
        <h3>Mierea naturală accesibilă în toată țara</h3>
        <p>
          Odată cu familiile de albine a crescut și producția de miere, dar și
          dorința noastră de a ajuta mai mulți oameni să se bucure de
          beneficiile unei mieri de albine adevărate, lucru dificil de găsit în
          ziua de azi. Astfel, am creat site-ul Stupul Vesel, unde oferim mierea
          pură la preț accesibil, de producător. Sperăm ca pasiunea noastră să
          ajute cât mai mulți oameni să descopere beneficiile nemăsurabile pe
          care mierea le are asupra sănătății noastre. Pe acest site ne străduim
          să vă oferim nu numai un produs calitativ, cât și toate informațiile
          de care aveți nevoie în ceea ce privește apicultura.
        </p>
        <h3>Planuri de viitor</h3>
        <p>
          Deocamdată producem patru tipuri de miere: de salcam,
          floarea-soarelui, miere de rapiță și polifloră. Cu toate acestea, ne
          pregătim să putem oferi și alte produse apicole, precum propolis,
          făgurași și lăptișor de matcă. Suntem deschiși la sugestii sau
          întrebări, așa că nu ezitați să ne scrieți în secțiunea Contact sau să
          ne telefonați Stupul Vesel, adică Gabriel și Angelica Ghițoiu, alături
          de copiii noștri, Marius și Mădălina, și peste 90 de familii de albine
          vă urează o zi minunată și speră să vă bucurați de mierea noastră
          naturală!
        </p>
        <h3>Cursuri și certificări</h3>
        <ul>
          <li>
            Curs de Calificare în Meseria de Apicultor, eliberat de Agenția
            Națională de Consultanță Agricolă Craiova, Ministerul Agriculturii.
          </li>
          <li>
            Certificat de Calificare Profesională pentru Apicultură, eliberat de
            Camera Agricolă Dolj, Ministerul Muncii.
          </li>
          <li>
            Certificat de Înregistrare Sanitară-Veterinară și pentru Siguranța
            Alimentelor pentru Unitățile de Vânzare cu Amănuntul (18.10.2007),
            eliberat de Direcția Sanitară-Veterinară și pentru Siguranța
            Alimentelor Dolj.
          </li>
        </ul>
      </div>
      <div className="order-despre-noi">
        <h1>Comandă acum miere naturală 100% direct de la apicultor.</h1>
        <p>
          Livrare personală în București in Vatra Luminoasa, 26 și prin curier
          sau Poșta Română, în toată ţara.
        </p>
        <Link to={"/produse"} onClick={scrollToTop}>
          <button className="btn-despre-noi btn">Vezi toate produsele</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
