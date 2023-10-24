import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./articole.css";
import art1 from "../../assets/articol1.png";

function Articole() {
  return (
    <div>
      <Navbar />
      <div className="banner-contact">
        <h1 className="title">Articole</h1>
        <p className="description-banner">Home » Articole</p>
      </div>

      <div className="articole">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={art1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Beneficiile mierii în alimentația copilului
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mierea crudă reprezintă mierea colectată din fagure, care nu a
                fost pasteurizată sau prelucrată de către apicultor, ci doar
                curățată de resturi, printr-un procedeu ce implică strecurarea
                mierii printr-o sită.a
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="warning">
              Afla mai multe
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/articol1.png
              "
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mierea crudă – calități și beneficii pentru sănătate
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mierea crudă reprezintă mierea colectată din fagure, care nu a
                fost pasteurizată sau prelucrată de către apicultor, ci doar
                curățată de resturi, printr-un procedeu ce implică strecurarea
                mierii printr-o sită.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="warning">
              Afla mai multe
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/articol1.png
              "
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tipuri de miere de albine
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mierea este un produs apicol obținut prin transformarea și
                prelucrarea nectarului de către albine. Este primul îndulcitor
                folosit de către om, însă de-a lungul timpului i-au fost
                apreciate și proprietățile vindecătoare. În funcție de
                proveniența
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="warning">
              Afla mai multe
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/articol1.png
              "
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cum identificăm mierea de albine contrafăcută
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tot mai mulți clienți și prieteni m-au întrebat cum se poate
                deosebi mierea naturală de cea contrafăcută. Pentru a vă
                răspunde la întrebări, am decis să scriu acest articol care să
                vă ajute să folosiți
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="warning">
              Afla mai multe
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/articol1.png
              "
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                De ce se zahariseste mierea naturala
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Zaharisirea, cristalizarea sau granularea mierii este un fenomen
                natural prin care aceasta trece din stare lichidă într-o stare
                semisolidă. În apicultură se foloseşte termenul de zaharisire,
                miere zaharisită. Cristalizarea nu afectează calitatea şi aroma
                acesteia,
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="warning">
              Afla mai multe
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="../../assets/articol1.png
              "
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Remedii simple cu miere de albine
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Știai că majoritatea afecțiunilor superficiale pot fi tratate
                mult mai ușor cu remedii naturiste? Contrar medicamentelor
                chimice, acestea sunt mult mai puțin invazive pentru organism și
                ajută corpul să se refacă la fel de eficient.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="warning">
              Afla mai multe
            </Button>
          </CardActions>
        </Card>
      </div>

      <Footer />
    </div>
  );
}

export default Articole;
