// importer les librairie - 1
require("dotenv").config();
const express = require("express"); // mettre les donner sensible dans l'environnement de l'ordinateur.
const cors = require("cors");
const bodyParser = require("body-parser"); // verifer l'url des requettes 
const rateLimit = require("express-rate-limit"); // Import the rate-limiting middleware
const authRoute = require("./routes/auth-route");
const mangasRoute = require("./routes/mangas-route");

// init app avec la librairie express - 2
const app = express();
// 
const corsOptions = {
    origin: "http://localhost:3000", // Autorise les requêtes provenant de ce domaine
    credentials: true, // Indiquez que les cookies et les en-têtes d'authentification peuvent être inclus
  };
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());

//import les models - models = tables_bdd -3"
const Client = require("./models/client");
const Mangas = require("./models/mangas");

//import la database -4"
const database = require("./database");

/*// Define rate limiting options - limiter les requettes, *Tentative*
const limiter = rateLimit({
  windowMs:   60 * 1000, // 15 minutes
  max: 15, // Limit each IP to 100 requests per windowMs
  message: "Reviens dans 1 minutes", // Message renvoyé en cas de dépassement de limite
});

// Apply the rate limiter to all requests
app.use(limiter);  */

// Connecter la base de donnes avec saquelize -5"
database.sequelize
  .sync({ force: false })
  .then(async () => {
    console.log("Base de données connectée");
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion");
  });
// Lien vers les routes -6"
app.use("/auth", authRoute);
app.use("/mangas", mangasRoute);

// Connection Server -7"
const port = process.env.PORT || 5000; // "||" -"ou"
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
