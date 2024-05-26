const multer = require("multer");
const { emptyDirSync } = require("fs-extra");
const { join } = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = join(__dirname, "../uploads");
    console.log({ "MULTER UPLOAD PATH": dir });
    emptyDirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
