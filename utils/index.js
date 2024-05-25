const { getStatus, updateStatus, resetStatus } = require("./status");
const {
  getDeviceState,
  updateDeviceState,
  resetDeviceState,
} = require("./deviceState");
const {
  getMachinePosition,
  updateMachinePosition,
  resetMachinePosition,
} = require("./machinePosition");
const {
  getGcodeConfig,
  updateGcodeConfig,
  resetGcodeConfig,
} = require("./gcodeConfig");

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
  getGcodeConfig,
  updateGcodeConfig,
  resetGcodeConfig,
};
