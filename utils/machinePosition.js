const initialState = { x: 0, y: 0 };
const position = { ...initialState };

const getMachinePosition = () => position;
const updateMachinePosition = (newPosition) =>
  Object.assign(position, newPosition);
const resetMachinePosition = () => Object.assign(position, initialState);

module.exports = {
  getMachinePosition,
  updateMachinePosition,
  resetMachinePosition,
};
