import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((valArray) => console.log(`${valArray[0].body} ${valArray[1].firstName} ${valArray[1].lastName}`));
}
