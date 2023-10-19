const productsData = [
  {
    id: 1,
    name: "Miere anghinare",
    description:
      "Mierea de anghinare are aromă și gust caracteristic, fiind recoltată de albine din florile spontane, înflorite în condiții favorabile în a doua parte a verii pe islazurile sau terasele din lunca Dunării.",
    price: 20,
    imageURL: "../assets/articol1.png",
    category: "miere",
  },
  {
    id: 2,
    name: "Miere malin",
    description:
      " Miere și polen foarte parfumat, cea mai mare parte fiind cheltuită pentru hrana puietului și dezvoltarea timpurie a familiilor de albini, cee ace este foarte important pentru apicultori!",
    price: 20,
    imageURL: "../assets/miere-malin.png",
    category: "miere",
  },
  {
    id: 3,
    name: "Miere menta",
    description:
      "Mierea de menta este un rasfat rar. Are o aroma puternica si distinctiva, care variaza in functie de varietatea de menta din care a fost facuta. Din fericire, menta este cultivata pentru uleiul sau esential si aceste campuri mari de menta.",
    price: 25,
    imageURL: "../assets/miere-menta.png",
    category: "miere",
  },
  {
    id: 4,
    name: "Miere poliflora",
    description:
      "Considerata de catre majoritatea specialistilor o miere completa, mierea poliflora are in compozitia sa complexul de vitamine B si C, minerale (calciu, magneziu, fier), enzime si acizi organici. Datorita continutului sau de glucoza, sucroza si fructoza.",
    price: 20,
    imageURL: "../assets/miere-poliflora.png",
    category: "miere",
  },
  {
    id: 5,
    name: "Miere salcam",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 40,
    imageURL: "../assets/miere-salcam.png",
    category: "miere",
  },
  {
    id: 6,
    name: "Miere tei",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/miere-tei.png",
    category: "miere",
  },
  {
    id: 7,
    name: "Turta proteine",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/turta-proteine.jpg",
    category: "hrana",
  },
  {
    id: 8,
    name: "Turta energetica",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/turta-energetica.jpg",
    category: "hrana",
  },
  {
    id: 9,
    name: "Turta vitamine",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/turta-vitamine.jpg",
    category: "hrana",
  },
  {
    id: 10,
    name: "Turta minerale",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/turta-minerale.jpg",
    category: "hrana",
  },
  {
    id: 11,
    name: "Turta Dulcofruct",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/turta-dulcofruct.jpg",
    category: "hrana",
  },
  {
    id: 12,
    name: "Turta polen",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/turta-polen.jpg",
    category: "hrana",
  },
  {
    id: 13,
    name: "Colector propolis",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/colector.jpg",
    category: "accesorii",
  },
  {
    id: 14,
    name: "Urdinisi",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/urdinis.jpg",
    category: "accesorii",
  },
  {
    id: 15,
    name: "Adaptor stupina",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/adapator-stupina.jpg",
    category: "accesorii",
  },
  {
    id: 16,
    name: "Agrafe",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/agrafe.jpg",
    category: "accesorii",
  },
  {
    id: 17,
    name: "Carabina apicola reglabila",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/carabina-metalica.jpg",
    category: "accesorii",
  },
  {
    id: 18,
    name: "Capcana metalica",
    description:
      "Mierea de salcam este una dintre cele mai cunoscute si dulci sortimente de miere datorita gustului delicat cu tenta florala. Aceasta isi pastreaza starea lichida pentru o lunga perioada de timp datorita continutului ridicat de fructoza.",
    price: 30,
    imageURL: "../assets/capcana-metal.jpg",
    category: "accesorii",
  },
];

export default productsData;
