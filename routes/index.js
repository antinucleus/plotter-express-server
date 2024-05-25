const checkDeviceRouter = require("./checkDevice.route");
const machineRouter = require("./machine.route");
const uploadImageRouter = require("./uploadImage.route");
const gcodeConfigRouter = require("./gcodeConfig.route");

module.exports = {
  checkDeviceRouter,
  machineRouter,
  uploadImageRouter,
  gcodeConfigRouter,
};
