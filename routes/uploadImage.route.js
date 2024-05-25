const express = require("express");
const { uploadImage } = require("../controllers");
const { upload } = require("../middlewares");

const uploadImageRouter = express.Router();

uploadImageRouter.post("/image", upload.single("image"), uploadImage);

module.exports = uploadImageRouter;
