const position = { x: 0, y: 0 };

const getMachinePosition = () => position;
const updateMachinePosition = (newPosition) =>
  Object.assign(position, newPosition);

module.exports = { getMachinePosition, updateMachinePosition };
