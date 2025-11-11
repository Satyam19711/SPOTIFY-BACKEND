const express = require("express");
const cors = require("cors");

const connectDB = require("./config/mongodb");
const connectCloudinary = require("./config/cloudinary");
const songRouter = require("./routes/songRoute");
const albumRouter = require("./routes/albumRoute");
require("dotenv").config({ quiet: true });

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.get("/", (req, res) => {
  res.send("api done");
});

app.listen(port, () => {
  console.log(`PORT is running on server ${port}`);
});
