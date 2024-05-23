const { status } = require("../utils");

const getStatus = async (req, res, next) => {
  console.log("Sending Status @sendStauts:", status);

  res.send(status);
};

const updateStatus = async (req, res, next) => {
  const update = req.body;
  Object.assign(status, update);

  res.send(status);
};

const movePen = async (req, res, next) => {
  const { penPosition } = req.body;

  console.log("Pen Position @movePen:", penPosition);

  status.penPosition = penPosition;

  res.send(`Pen moved ${penPosition}`);
};

const moveAxis = async (req, res, next) => {
  const motion = req.body;

  Object.assign(status, motion);

  console.log("Move Axis @moveAxis:", motion);
  console.log("Move Axis @moveAxis: status::", status);

  res.send(`Moved axis: ${status}`);
};

const sendCoordinates = async (req, res, next) => {
  const coordinates = req.body;

  console.log("Pen Direction @getCoordinates:", coordinates);

  res.send("success");
};

module.exports = {
  movePen,
  sendCoordinates,
  getStatus,
  moveAxis,
  updateStatus,
};
