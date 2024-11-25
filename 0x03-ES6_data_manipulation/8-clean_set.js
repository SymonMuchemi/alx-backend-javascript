export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new Error('set must be a Set');
  }

  if (startString.length === 0) {
    return '';
  }

  const finalStr = [...set]
    .filter((str) => str.indexOf(startString) !== -1)
    .map((str) => str.slice(startString.length));

  return finalStr.join('-');
}
