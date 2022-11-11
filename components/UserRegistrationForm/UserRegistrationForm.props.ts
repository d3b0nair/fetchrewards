import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import { FetchRewardsForm } from '../../interfaces/fetchrewards.interface';

export interface UserRegistrationFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  data: FetchRewardsForm;
}

export interface IFormInput {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  occupation: string;
  state: { name: string; abbreviation: string };
}
