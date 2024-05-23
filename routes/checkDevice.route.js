const express = require("express");

const { checkDevice } = require("../controllers");

const checkDeviceRouter = express.Router();

checkDeviceRouter.get("/check", checkDevice);

module.exports = checkDeviceRouter;
