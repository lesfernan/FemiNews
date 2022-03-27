const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("funciona");
});

app.use("/api", authRoutes);

module.exports = app;
