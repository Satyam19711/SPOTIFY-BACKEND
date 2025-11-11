const albumModel = require("../models/albumModel");

const cloudinary = require("cloudinary").v2;

const addAlbum = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColor = req.body.bgColor;
    const imageFile = req.file;

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColor,
      image: imageUpload.secure_url,
    };
    const album = albumModel(albumData);
    await album.save();

    res.json({ success: true, message: "Album added Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find();
    res.json({ success: true, album: allAlbums });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const removeAlbum = async (req, res) => {
  try {
    await albumModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Album deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { addAlbum, listAlbum, removeAlbum };
