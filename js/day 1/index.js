import inputData from './inputData.js';
console.log({ inputData });
const sum = (a, b) => a + b;
const massToFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2;
  return fuel <= 0 ? 0 : fuel;
};

const totalSpacecraftFuel = inputData.map(massToFuel).reduce(sum);
console.log({ totalSpacecraftFuel });

// Part 2

export const massToFuelRecursive = fuelMass => {
  const mass = massToFuel(fuelMass);
  console.log({ mass });
  if (mass === 0) return 0;
  return mass + massToFuelRecursive(mass);
};

const totalSpacecraftFuelIncludingFuel = inputData
  .map(massToFuelRecursive)
  .reduce(sum);
console.log({ totalSpacecraftFuelIncludingFuel });
