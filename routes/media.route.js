const express = require("express");
const { uploadImage, getImage } = require("../controllers");
const { upload } = require("../middlewares");

const mediaRouter = express.Router();

mediaRouter.post("/image", upload.single("image"), uploadImage);
mediaRouter.get("/image", getImage);

module.exports = mediaRouter;
