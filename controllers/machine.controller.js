const { status } = require("../utils");

const getStatus = async (req, res, next) => {
  console.log("Sending Status @sendStauts:", status);

  res.send(status);
};

const movePen = async (req, res, next) => {
  const { penDirection } = req.body;

  console.log("Pen Direction @movePen:", penDirection);

  status.penDirection = penDirection;

  res.send(`Pen moved ${penDirection}`);
};

const sendCoordinates = async (req, res, next) => {
  const coordinates = req.body;

  console.log("Pen Direction @getCoordinates:", coordinates);

  res.send("success");
};

module.exports = { movePen, sendCoordinates, getStatus };
