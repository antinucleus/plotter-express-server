const express = require("express");
const {
  uploadImage,
  getSvg,
  convertImagetoSvg,
  generateGcode,
  getGcode,
} = require("../controllers");
const { upload } = require("../middlewares");

const mediaRouter = express.Router();

mediaRouter.post("/image/upload", upload.single("image"), uploadImage);
mediaRouter.post("/image/generate", convertImagetoSvg);
mediaRouter.get("/image/get", getSvg);
mediaRouter.get("/gcode/generate", generateGcode);
mediaRouter.get("/gcode/get", getGcode);

module.exports = mediaRouter;
