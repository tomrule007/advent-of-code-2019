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
  for (
    let instructionPointer = 0;
    instructionPointer < intCode.length;
    instructionPointer += 4
  ) {
    const [
      opcode,
      firstParameterAddress,
      secondParameterAddress,
      thirdParameterAddress
    ] = mutatedIntCode.slice(instructionPointer, instructionPointer + 4);
    const firstParameterValue = mutatedIntCode[firstParameterAddress];
    const secondParameterValue = mutatedIntCode[secondParameterAddress];

    switch (opcode) {
      case 1:
        //add
        mutatedIntCode[thirdParameterAddress] =
          firstParameterValue + secondParameterValue;
        break;
      case 2:
        // Multiply
        mutatedIntCode[thirdParameterAddress] =
          firstParameterValue * secondParameterValue;
        break;
      case 99:
        // END
        return mutatedIntCode;
        break;
      default:
        return undefined;

        break;
    }
  }
}

const processedIntCode = intCodeProcessor(beforeFire(intCode));
console.log(processedIntCode[0]); // answer: 5866714

// Part 2
const insertNounAndVerb = (noun, verb, array) => {
  const modifiedArray = [...array];
  modifiedArray[1] = noun;
  modifiedArray[2] = verb;
  return modifiedArray;
};
function findNounAndVerbForOutput(output, intCode) {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const processedIntCode = intCodeProcessor(
        insertNounAndVerb(noun, verb, intCode)
      );
      if (processedIntCode && processedIntCode[0] === output) {
        return { noun, verb };
      }
    }
  }
  throw new Error('Part 2 answer Not found!');
}
const { noun, verb } = findNounAndVerbForOutput(19690720, intCode);
const partTwoAnswer = 100 * noun + verb;
console.log({ partTwoAnswer }); // answer: 5208
