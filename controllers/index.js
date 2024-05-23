const { checkDevice } = require("./checkDevice.controller");
const { movePen, getStatus, sendCoordinates } = require("./machine.controller");

module.exports = { checkDevice, movePen, getStatus, sendCoordinates };
