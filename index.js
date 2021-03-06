const express = require("express");
const routes = require("./routes");
require("dotenv").config({ path: "./variables.env" });

// CORS
const cors = require("cors");

// db
const db = require("./config/db");
require("./models/Users");
require("./models/Roles");
require("./models/Products");
require("./models/CategoryProduct");
require("./models/DetailsProduct");
require("./models/Entry");
require("./models/Exit");
db.sync()
  .then(() => console.log("DB conected"))
  .catch((err) => console.log("DB Error:", err));

// app
const app = express();

// bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes());

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server run in port", port));
