import intCode from './inputData.js';
//opcode
// 1 -> add  ([opcode,operant index,operant index,resultant index])
// 2 -> multiple  ([opcode,operant index,operant index,resultant index])
// *Stepping forward 4 positions reveals the next opcode

const beforeFire = array => {
  const modifiedArray = [...array];
  modifiedArray[1] = 12;
  modifiedArray[2] = 2;
  return modifiedArray;
};

function intCodeProcessor(intCode) {
  const mutatedIntCode = [...intCode];
  for (let i = 0; i < intCode.length; i += 4) {
    const [
      opcode,
      operantIndex1,
      operantIndex2,
      resultantIndex
    ] = mutatedIntCode.slice(i, i + 4);
    const operantValue1 = mutatedIntCode[operantIndex1];
    const operantValue2 = mutatedIntCode[operantIndex2];

    switch (opcode) {
      case 1:
        //add
        mutatedIntCode[resultantIndex] = operantValue1 + operantValue2;
        break;
      case 2:
        // Multiply
        mutatedIntCode[resultantIndex] = operantValue1 * operantValue2;
        break;
      case 99:
        // END
        return mutatedIntCode;
        break;
      default:
        throw new Error(`Unknown Opcode: ${opcode}`);

        break;
    }
  }
}

const processedIntCode = intCodeProcessor(beforeFire(intCode));
console.log(processedIntCode[0]); // answer: 5866714

// Part 2
