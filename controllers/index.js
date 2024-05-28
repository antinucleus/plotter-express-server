const { checkDevice } = require("./checkDevice.controller");
const {
  uploadImage,
  getSvg,
  convertImagetoSvg,
  generateGcode,
  getGcode,
} = require("./media.controller");

const {
  movePen,
  getMachineStatus,
  updateMachineStatus,
  getCoordinates,
  updateCoordinates,
  moveAxis,
  resetAllValues,
} = require("./machine.controller");

const { getConfig, updateConfig } = require("./gcodeConfig.controller");

module.exports = {
  checkDevice,
  movePen,
  getMachineStatus,
  updateMachineStatus,
  getCoordinates,
  updateCoordinates,
  moveAxis,
  resetAllValues,
  uploadImage,
  getSvg,
  getConfig,
  updateConfig,
  convertImagetoSvg,
  generateGcode,
  getGcode,
};
