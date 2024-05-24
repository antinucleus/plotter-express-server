const { checkDevice } = require("./checkDevice.controller");
const {
  movePen,
  getStatus,
  updateStatus,
  getCoordinates,
  updateCoordinates,
  moveAxis,
} = require("./machine.controller");

module.exports = {
  checkDevice,
  movePen,
  getStatus,
  updateStatus,
  getCoordinates,
  updateCoordinates,
  moveAxis,
};
