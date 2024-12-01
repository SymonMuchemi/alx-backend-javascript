const calculateNumber = (a, b) => {
  const result = Math.round(a) + Math.round(b);

  return Object.is(result, -0) ? 0 : result;
};

module.exports = calculateNumber;
