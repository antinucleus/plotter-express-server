const { execSync } = require("child_process");
const { start } = require("svgtogcode");
const { join } = require("path");

const uploadImage = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  res.status(200).send("Image uploaded and saved successfully.");
};

const convertImagetoSvg = async (req, res, next) => {
  const { detailLevel } = req.body;
  console.log({ detailLevel });

  try {
    const scriptPath = join(__dirname, `../imagetosvg.sh`);
    const filePath = join(__dirname, "../uploads/image*");

    console.log({ scriptPath, filePath, detailLevel });

    execSync(`${scriptPath} ${filePath} ${detailLevel}`);

    res.status(200).send("Image converted to svg successfully.");
  } catch (error) {
    console.log({ error });

    return res.status(400).send("Image did not converted to svg");
  }
};

const generateGcode = async (req, res, next) => {
  try {
    start();

    res.status(200).send("Gcode generated successfully.");
  } catch (error) {
    console.log({ error });

    return res.status(400).send("Gcode did not generated");
  }
};

const getSvg = async (req, res, next) => {
  const path = join(__dirname, "../public/result.svg");

  res.status(200).sendFile(path);
};

const getGcode = async (req, res, next) => {
  const path = join(__dirname, "../output.gcode");

  res.status(200).sendFile(path);
};

module.exports = {
  uploadImage,
  getSvg,
  convertImagetoSvg,
  generateGcode,
  getGcode,
};
