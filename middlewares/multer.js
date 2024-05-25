const multer = require("multer");
const { emptyDirSync } = require("fs-extra");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `${process.cwd()}/uploads`;
    emptyDirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
