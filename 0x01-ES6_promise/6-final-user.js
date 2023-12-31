import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => result.map((res) => (
      {
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : String(res.reason),
      })));
}

// status
//     A string, either "fulfilled" or "rejected", indicating the eventual state of the promise.
// value
//     Only present if status is "fulfilled". The value that the promise was fulfilled with.
// reason
//     Only present if status is "rejected". The reason that the promise was rejected with.
