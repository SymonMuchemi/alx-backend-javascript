export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Retrieve the current count from weakMap or default to 0
  const count = (weakMap.get(endpoint) || 0) + 1;

  // Update the count in weakMap
  weakMap.set(endpoint, count);

  // If the count exceeds or equals 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
