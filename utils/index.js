const status = require("./status");
const { updateDeviceState, getDeviceState } = require("./deviceState");
const {
  getMachinePosition,
  updateMachinePosition,
} = require("./machinePosition");
module.exports = {
  status,
  updateDeviceState,
  getDeviceState,
  getMachinePosition,
  updateMachinePosition,
};
