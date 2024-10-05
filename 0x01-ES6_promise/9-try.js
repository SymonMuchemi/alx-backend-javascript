// creates and returns an array named 'queue'
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
    return [...queue, 'Guardrail was processed'];
  } catch (error) {
    queue.push(error.message);
    return [...queue, 'Guardrail was processed'];
  }
}
