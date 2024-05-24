const { checkDevice } = require("./checkDevice.controller");
const {
  movePen,
  getMachineStatus,
  updateMachineStatus,
  getCoordinates,
  updateCoordinates,
  moveAxis,
  resetAllValues,
} = require("./machine.controller");

module.exports = {
  checkDevice,
  movePen,
  getMachineStatus,
  updateMachineStatus,
  getCoordinates,
  updateCoordinates,
  moveAxis,
  resetAllValues,
};
