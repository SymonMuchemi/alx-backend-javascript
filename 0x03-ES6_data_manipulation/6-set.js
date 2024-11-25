export default function setFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw Error('Arr must be an array');
  }

  return new Set(arr);
}
