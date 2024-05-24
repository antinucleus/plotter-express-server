const status = {
  autoHoming: "no", // yes, no
  startPlotting: "no", // yes, no
  manualControl: "no", // yes, no
  penPosition: "down", // up, down
  isMovingPen: "no", // yes, no
  isMovingX: "no", // yes, no
  isMovingY: "no", // yes, no
  targetDistanceX: 0,
  targetDistanceY: 0,
  direction: "+", // +, -, neutral
  driveMode: "FullStep", // FullStep, HalfStep, QuarterStep, EighthStep, SixteenthStep
};

module.exports = status;
