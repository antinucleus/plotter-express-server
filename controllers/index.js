const { checkDevice } = require("./checkDevice.controller");
const {
  movePen,
  getStatus,
  sendCoordinates,
  moveAxis,
  updateStatus,
} = require("./machine.controller");

module.exports = {
  checkDevice,
  movePen,
  getStatus,
  sendCoordinates,
  moveAxis,
  updateStatus,
};
