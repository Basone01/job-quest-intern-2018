const shift = (array = [], direction = "left", times = 1) => {
  const moddedTimes = times % array.length;
  let shiftedArray =
    direction === "left"
      ? [...array.slice(moddedTimes), ...array.slice(0, moddedTimes)]
      : [
          ...array.slice(array.length - moddedTimes, array.length),
          ...array.slice(0, array.length - moddedTimes)
        ];

  console.log(shiftedArray);
  return shiftedArray;
};

module.exports = shift;