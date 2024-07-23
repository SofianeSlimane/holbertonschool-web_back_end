import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let obj = null;
  try {
    await signUpUser(firstName, lastName).then((result) => {
      obj = [{
        status: 'fulfilled',
        value: result,
      }];
    });
    await uploadPhoto(fileName).then((result) => {
      obj = [{
        status: 'fulfilled',
        value: result,
      }];
    });
  } catch (e) {
    obj = [
      {
        status: 'rejected',
        value: e,
      },
    ];
  }
  return obj;
}
