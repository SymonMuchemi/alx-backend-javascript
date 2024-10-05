// calls uploadPhoto and createUser and returns an object
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, userData]) => ({
      photo: { ...photoData },
      user: { ...userData },
    })).catch(() => ({
      photo: null,
      user: null,
    }));
}
