const { getStatus, updateStatus, resetStatus } = require("./status");
const {
  updateDeviceState,
  getDeviceState,
  resetDeviceState,
} = require("./deviceState");
const {
  getMachinePosition,
  updateMachinePosition,
  resetMachinePosition,
} = require("./machinePosition");
module.exports = {
  getStatus,
  updateStatus,
  resetStatus,
  getDeviceState,
  updateDeviceState,
  resetDeviceState,
  getMachinePosition,
  updateMachinePosition,
  resetMachinePosition,
};
