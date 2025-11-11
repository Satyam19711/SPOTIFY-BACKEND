const express = require("express");
const uploads = require("../middleware/multer");
const {
  addAlbum,
  listAlbum,
  removeAlbum,
} = require("../controller/albumController");

const albumRouter = express.Router();

albumRouter.post("/add", uploads.single("image"), addAlbum);

albumRouter.get("/list", listAlbum);

albumRouter.post("/remove", removeAlbum);

module.exports = albumRouter;
