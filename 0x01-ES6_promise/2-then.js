export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a reponse from the API');
  }).then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }).catch(() => {
    throw new Error();
  });
}
