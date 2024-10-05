// return the first promise to resolve
export default async function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then(result => result);
}
