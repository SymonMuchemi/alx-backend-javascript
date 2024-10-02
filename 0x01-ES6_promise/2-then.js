export default function handleResponseFromAPI(promise) {
  promise.then(() => ({ status: 200, body: 'success' })).catch(() => new Error()).finally(() => {
    console.log('Got a reponse from the API');
  });
}
