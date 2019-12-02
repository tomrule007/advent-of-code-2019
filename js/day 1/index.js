import inputData from './inputData.js';
console.log({ inputData });
const moduleMassToFuel = mass => Math.floor(mass / 3) - 2;
const sum = (a, b) => a + b;

const totalSpacecraftFuel = inputData.map(moduleMassToFuel).reduce(sum);
console.log({ totalSpacecraftFuel });
