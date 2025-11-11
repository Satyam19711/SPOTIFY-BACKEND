const express = require("express");
const uploads = require("../middleware/multer");
const {
  addAlbum,
  listAlbum,
  removeAlbum,
} = require("../controller/albumController");
const verifyAdmin = require("../middleware/verifyAdmin");

const albumRouter = express.Router();

albumRouter.post("/add", verifyAdmin, uploads.single("image"), addAlbum);

albumRouter.get("/list", listAlbum);

albumRouter.post("/remove", verifyAdmin, removeAlbum);

module.exports = albumRouter;
