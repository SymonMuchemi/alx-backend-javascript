export default function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, val] of itemsMap) {
    if (val === 1) {
      itemsMap.set(key, 100);
    }
  }

  return itemsMap;
}
