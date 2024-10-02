// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, userData]) => {
      console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
