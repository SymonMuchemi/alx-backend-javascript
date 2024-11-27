const calculateNumber = (a, b) => {
  const result = Math.ceil(a) + Math.ceil(b);

  return Object.is(result, -0)? 0 : result;
}

module.exports = calculateNumber
