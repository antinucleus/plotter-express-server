const { execSync } = require("child_process");
const { start } = require("svgtogcode");
const { join } = require("path");

const uploadImage = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  try {
    const scriptPath = join(__dirname, `../imagetosvg.sh`);
    const filePath = join(__dirname, "../uploads/image*");

    console.log({ scriptPath, filePath });

    execSync(`${scriptPath} ${filePath}`);

    start();

    res.status(200).send("Image uploaded and saved successfully.");
  } catch (error) {
    console.log({ error });
    return res.status(400).send("Image did not converted to svg");
  }
};

const getImage = async (req, res, next) => {
  const path = join(__dirname, "../public/result.svg");

  console.log({ "PUBLIC GET IMAGE PATH": path });
  res.status(200).sendFile(path);
};

module.exports = { uploadImage, getImage };
