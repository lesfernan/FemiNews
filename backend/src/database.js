const mongoose = require("mongoose");

// La siguiente URL es para correr la DB en MongoDB Atlas
const MONGODB_URI = `mongodb+srv://siclo:contrasena@cluster0.ajktt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// La siguiente URL es para correr la DB en localhost
// const MONGODB_URI = "mongodb://localhost/siclo"

mongoose
  .connect(MONGODB_URI)
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));
