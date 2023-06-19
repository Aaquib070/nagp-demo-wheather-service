require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const config = require("./config/config");
const wheatherRoutes = require("./routes/wheatherRoutes");


config.connectDB();

app.use(cors());

app.use(express.static(path.join(__dirname, "public/client/build")));

app.use("/api/wheather", wheatherRoutes);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log("Express Server for Wheather report running on port " + app.get("port"));
});

process.on("SIGINT", () => {
  config.disconnectDB();
  process.exit(0);
});
