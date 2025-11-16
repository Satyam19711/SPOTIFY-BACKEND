const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/mongodb");
const connectCloudinary = require("./src/config/cloudinary");
const songRouter = require("./src/routes/songRoute");
const albumRouter = require("./src/routes/albumRoute");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://satyam1919-spotify-clone.vercel.app",
      "https://satyam1919-spotify-admin.vercel.app",
    ],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
connectDB();
connectCloudinary();

app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);

app.listen(port, () => {
  console.log(`PORT is running on server ${port}`);
});
