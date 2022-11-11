import { IFormInput } from '../components/UserRegistrationForm/UserRegistrationForm.props';
import { FetchRewardsForm } from '../interfaces/fetchrewards.interface';

export const getRegData = async () => {
  const regData = await fetch(
    'https://frontend-take-home.fetchrewards.com/form'
  ).then((res) => res.json().then((data: FetchRewardsForm) => data));
  return regData;
};

export const registerNewUser = async ({
  fullName,
  email,
  password,
  occupation,
  state,
}: Omit<IFormInput, 'confirmPassword'>) => {
  const newUser = await fetch(
    'https://frontend-take-home.fetchrewards.com/form',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fullName,
        email,
        password,
        occupation,
        state,
      }),
    }
  ).then((res) => res);
  return newUser.status;
};
