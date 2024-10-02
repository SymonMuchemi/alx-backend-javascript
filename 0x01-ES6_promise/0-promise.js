// returns a promise
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve(true);
    } else {
      reject(new Error('Operation Failed'));
    }
  });
}

export default getResponseFromAPI;
