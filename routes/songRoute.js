const express = require("express");
const {
  addSong,
  listSong,
  removeSong,
} = require("../controller/songController");

const uploads = require("../middleware/multer");

const songRouter = express.Router();

songRouter.post(
  "/add",
  uploads.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  addSong
);
songRouter.get("/list", listSong);

songRouter.post("/remove", removeSong);

module.exports = songRouter;
