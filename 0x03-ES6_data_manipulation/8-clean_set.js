export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new Error('set must be a Set');
  }

  if (startString === undefined || typeof startString !== 'string') {
    return '';
  }

  const finalStr = [...set]
    .filter((str) => typeof str === 'string' && str.includes(startString))
    .map((str) => str.slice(startString.length));

  return finalStr.join('-');
}
