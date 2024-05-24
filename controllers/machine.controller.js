const {
  status,
  getMachinePosition,
  updateMachinePosition,
} = require("../utils");

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
  status.isMovingPen = "yes";

  res.send(`Pen moved ${penPosition}`);
};

const moveAxis = async (req, res, next) => {
  const motion = req.body;

  Object.assign(status, motion);

  res.send(`Moved axis: ${status}`);
};

const updateCoordinates = async (req, res, next) => {
  const coordinates = req.body;
  console.log("Machine Position @sendCoordinates:", coordinates);

  updateMachinePosition(coordinates);

  res.send("success");
};

const getCoordinates = async (req, res, next) => {
  console.log("Machine Positon @getCoordinates:", getMachinePosition());

  res.send(getMachinePosition());
};

module.exports = {
  movePen,
  getCoordinates,
  updateCoordinates,
  getStatus,
  updateStatus,
  moveAxis,
};
