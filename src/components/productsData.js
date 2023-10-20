import anghinare from "./assets/miere-anginare.png";
import malin from "../assets/miere-malin.png";
import menta from "../assets/miere-menta.png";
import poliflora from "../assets/miere-poliflora.png";
import salcam from "../assets/miere-salcam.png";
import tei from "../assets/miere-tei.png";
import dulcofruct from "../assets/turta-dulcofruct.jpg";
import enegetica from "../assets/turta-energetica.jpg";
import minerale from "../assets/turta-minerale.jpg";
import polen from "../assets/turta-polen.jpg";
import proteine from "../assets/turta-proteine.jpg";
import vitamine from "../assets/turta-vitamine.jpg";
import colector from "../assets/colecto.jpgr";
import urdinis from "../assets/urdinis.jpg";
import adaptor from "../assets/adaptor-stupina.jpg";
import agrafe from "../assets/agrafe.jpg";
import carabina from "../assets/carabina-metalica.jpg";
import capcana from "../assets/capcana-metal.jpg";
const productsData = [
  {
    id: 1,
    name: "Miere anghinare",
    description:
      "Mierea de anghinare are aromă și gust caracteristic, fiind recoltată de albine din florile spontane, înflorite în condiții favorabile în a doua parte a verii pe islazurile sau terasele din lunca Dunării.",
    price: 20,
    imageURL: anghinare,
    category: "miere",
  },
  {
    id: 2,
    name: "Miere malin",
    description:
      " Miere și polen foarte parfumat, cea mai mare parte fiind cheltuită pentru hrana puietului și dezvoltarea timpurie a familiilor de albini, cee ace este foarte important pentru apicultori!",
    price: 20,
    imageURL: malin,
    category: "miere",
  },
  {
    id: 3,
    name: "Miere menta",
    description:
      "Mierea de menta este un rasfat rar. Are o aroma puternica si distinctiva, care variaza in functie de varietatea de menta din care a fost facuta. Din fericire, menta este cultivata pentru uleiul sau esential si aceste campuri mari de menta.",
    price: 25,
    imageURL: menta,
    category: "miere",
  },
  {
    id: 4,
    name: "Miere poliflora",
    description:
      "Considerata de catre majoritatea specialistilor o miere completa, mierea poliflora are in compozitia sa complexul de vitamine B si C, minerale (calciu, magneziu, fier), enzime si acizi organici. Datorita continutului sau de glucoza, sucroza si fructoza.",
    price: 20,
    imageURL: poliflora,
    category: "miere",
  },
  {
    id: 5,
    name: "Miere salcam",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 40,
    imageURL: salcam,
    category: "miere",
  },
  {
    id: 6,
    name: "Miere tei",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: tei,
    category: "miere",
  },
  {
    id: 7,
    name: "Turta proteine",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: proteine,
    category: "hrana",
  },
  {
    id: 8,
    name: "Turta energetica",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: enegetica,
    category: "hrana",
  },
  {
    id: 9,
    name: "Turta vitamine",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: vitamine,
    category: "hrana",
  },
  {
    id: 10,
    name: "Turta minerale",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: minerale,
    category: "hrana",
  },
  {
    id: 11,
    name: "Turta Dulcofruct",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: dulcofruct,
    category: "hrana",
  },
  {
    id: 12,
    name: "Turta polen",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: polen,
    category: "hrana",
  },
  {
    id: 13,
    name: "Colector propolis",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: colector,
    category: "accesorii",
  },
  {
    id: 14,
    name: "Urdinisi",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: urdinis,
    category: "accesorii",
  },
  {
    id: 15,
    name: "Adaptor stupina",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: adaptor,
    category: "accesorii",
  },
  {
    id: 16,
    name: "Agrafe",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: agrafe,
    category: "accesorii",
  },
  {
    id: 17,
    name: "Carabina apicola reglabila",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: carabina,
    category: "accesorii",
  },
  {
    id: 18,
    name: "Capcana metalica",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: capcana,
    category: "accesorii",
  },
];

export default productsData;
