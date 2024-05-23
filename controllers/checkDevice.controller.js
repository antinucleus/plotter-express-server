const { updateDeviceState, getDeviceState } = require("../utils");

const checkDevice = async (req, res, next) => {
  updateDeviceState(true);
  res.send({ isDeviceConnected: getDeviceState() });
};

module.exports = { checkDevice };
