const uploadImage = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  res.status(200).send("Image uploaded and saved successfully.");
};

module.exports = { uploadImage };
