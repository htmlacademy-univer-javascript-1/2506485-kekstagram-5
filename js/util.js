const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomUniqueNumberGenerate = (a, b, usedArray) => {
  const generator = () => {
    const newNumber = getRandomInt(a, b);
    if (usedArray.includes(newNumber)){
      return generator ();
    }
    usedArray.push(newNumber);
    return newNumber;
  };

  return generator();
};
export {getRandomInt, getRandomUniqueNumberGenerate};
