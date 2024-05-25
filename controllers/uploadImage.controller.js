const { execSync } = require("child_process");
const { start } = require("svgtogcode");

const uploadImage = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  try {
    execSync("./imagetosvg.sh ./uploads/image*");

    start();

    res.status(200).send("Image uploaded and saved successfully.");
  } catch (error) {
    console.log({ error });
    return res.status(400).send("Image did not converted to svg");
  }
};

module.exports = { uploadImage };
