const express = require("express");
const {
  addSong,
  listSong,
  removeSong,
} = require("../controller/songController");

const uploads = require("../middleware/multer");
const verifyAdmin = require("../middleware/verifyAdmin");

const songRouter = express.Router();

songRouter.post(
  "/add",
  verifyAdmin,
  uploads.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  addSong
);
songRouter.get("/list", listSong);

songRouter.post("/remove", verifyAdmin, removeSong);

module.exports = songRouter;
