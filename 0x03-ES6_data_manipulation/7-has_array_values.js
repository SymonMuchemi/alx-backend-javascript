export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new Error('set must be a Set');
  }

  if (!Array.isArray(array)) {
    throw new Error('Array must be an Array');
  }

  for (const element of array) {
    if (!set.has(element)) return false;
  }

  return true;
}
