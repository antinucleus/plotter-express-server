const {
  getStatus,
  updateStatus,
  getMachinePosition,
  updateMachinePosition,
  resetStatus,
  resetDeviceState,
  resetMachinePosition,
} = require("../utils");

const getMachineStatus = async (req, res, next) => {
  res.send(getStatus());
};

const updateMachineStatus = async (req, res, next) => {
  const update = req.body;
  updateStatus(update);

  res.send(getStatus());
};

const movePen = async (req, res, next) => {
  const { penPosition } = req.body;
  updateStatus({ penPosition, isMovingPen: "yes" });

  res.send(`Pen moved ${penPosition}`);
};

const moveAxis = async (req, res, next) => {
  const motion = req.body;
  updateStatus(motion);

  res.send(`Moved axis: ${getStatus()}`);
};

const updateCoordinates = async (req, res, next) => {
  const coordinates = req.body;
  updateMachinePosition(coordinates);

  res.send("success");
};

const getCoordinates = async (req, res, next) => {
  res.send(getMachinePosition());
};

const resetAllValues = (req, res, next) => {
  resetStatus();
  resetDeviceState();
  resetMachinePosition();

  res.send("success");
};

module.exports = {
  movePen,
  getCoordinates,
  updateCoordinates,
  getMachineStatus,
  updateMachineStatus,
  moveAxis,
  resetAllValues,
};
