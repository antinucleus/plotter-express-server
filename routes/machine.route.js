const express = require("express");

const {
  movePen,
  getMachineStatus,
  updateMachineStatus,
  getCoordinates,
  updateCoordinates,
  moveAxis,
  resetAllValues,
} = require("../controllers");

const machineRouter = express.Router();

machineRouter.get("/status", getMachineStatus);
machineRouter.post("/status", updateMachineStatus);
machineRouter.post("/pen", movePen);
machineRouter.post("/axis", moveAxis);
machineRouter.get("/coordinates", getCoordinates);
machineRouter.post("/coordinates", updateCoordinates);
machineRouter.get("/reset", resetAllValues);

module.exports = machineRouter;
