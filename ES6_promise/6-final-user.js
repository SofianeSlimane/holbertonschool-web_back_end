import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const obj = [];
  try {
    await signUpUser(firstName, lastName).then((result) => {
      obj.push({
        status: 'fulfilled',
        value: result,
      });
    });
    await uploadPhoto(fileName).then((result) => {
      obj.push({
        status: 'fulfilled',
        value: result,
      });
    });
  } catch (e) {
    obj.push(
      {
        status: 'rejected',
        value: e,
      },
    );
  }
  return obj;
}
