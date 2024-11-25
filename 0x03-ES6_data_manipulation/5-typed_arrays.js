export default function createInt8TypedArray(lenght, position, value) {
  if (position >= lenght) {
    throw new Error('Position is outside range');
  }

  // create the buffer
  const buffer = new ArrayBuffer(lenght);

  const int8view = new Int8Array(buffer);

  int8view[position] = value;

  return buffer;
}
