export default function appendToEachArrayValue(array, appendString) {
  const arr = [];

  for (const value of array) {
    arr[array.indexOf(value)] = appendString + value;
  }

  return arr;
}
