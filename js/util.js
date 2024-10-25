const GetRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const GetRandomUniqueNumberGenerate = (a, b, usedArray) => {
  const generator = () => {
    const newNumber = GetRandomInt(a, b);
    if (usedArray.includes(newNumber)){
      return generator ();
    }
    usedArray.push(newNumber);
    return newNumber;
  };

  return generator();
};
export {GetRandomInt, GetRandomUniqueNumberGenerate};
