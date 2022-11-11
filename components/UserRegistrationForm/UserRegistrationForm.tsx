import { useState, useEffect } from 'react';
import {
  useForm,
  SubmitHandler,
  Control as ControlType,
} from 'react-hook-form';
import {
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';

import {
  Button,
  CustomInput,
  DropDown,
  FieldWithController,
  PasswordStrengthMeter,
} from '..';

import {
  IFormInput,
  UserRegistrationFormProps,
} from './UserRegistrationForm.props';
import { registerNewUser } from '../../lib/fetchrewards';

export const UserRegistrationForm = ({
  data,
  className,
}: UserRegistrationFormProps): JSX.Element => {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [canShowPasswordStrength, setCanShowPasswordStrength] =
    useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setIsSuccess(false);
    }
  }, [errors]);

  const onSubmit: SubmitHandler<IFormInput> = async ({
    fullName,
    email,
    password,
    occupation,
    state,
  }) => {
    setHidePassword(false);
    const newUser = await registerNewUser({
      fullName,
      email,
      password,
      occupation,
      state,
    });

    console.log(`Server return status code ${newUser}`);

    reset();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const passwordDisplayToggleClasses =
    'absolute top-[42%] right-5 text-blue-500 h-6 w-6 cursor-pointer';
  const passwordDisplayToggle = hidePassword ? (
    <EyeSlashIcon
      onClick={() => setHidePassword(!hidePassword)}
      className={passwordDisplayToggleClasses}
      width={1}
    />
  ) : (
    <EyeIcon
      onClick={() => setHidePassword(!hidePassword)}
      className={passwordDisplayToggleClasses}
      width={1}
    />
  );

  return (
    <form
      className={`${
        className ? className : ''
      } flex flex-col justify-center rounded-lg p-8 min-h-[1000px]`}
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e).catch((err) => {
          console.log(err);
        });
      }}
    >
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center">
          <CheckCircleIcon className="text-green-300 h-64 w-64" width={1} />
          <h2 className="text-3xl">Welcome aboard!</h2>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl lg:text-3xl text-primary text-center md:text-left font-bold">
              Join over 0 user on this website
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <FieldWithController
            required
            control={control as unknown as ControlType}
            label={'Full name'}
            type={'fullName'}
            error={errors.fullName}
          >
            <CustomInput
              autoComplete="name"
              id="fullName"
              placeholder={'Enter your full name'}
            />
          </FieldWithController>
          <FieldWithController
            required
            control={control as unknown as ControlType}
            label="Occupation"
            id="occupation"
            type="occupation"
            error={errors.occupation}
          >
            <DropDown listName={'occupation'} list={data.occupations} />
          </FieldWithController>
          <FieldWithController
            required
            control={control as unknown as ControlType}
            label="Pick the state you live in"
            id="state"
            type="state"
            error={errors.state?.name}
          >
            <DropDown
              listName="state"
              list={data.states.map(({ name }) => name)}
              values={data.states.map(({ abbreviation }) => abbreviation)}
            />
          </FieldWithController>
          <FieldWithController
            required
            control={control as unknown as ControlType}
            label={'Email address'}
            type={'email'}
            customPattern={{
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email address',
            }}
            error={errors.email}
          >
            <CustomInput
              autoComplete="email"
              id="email"
              placeholder={'Enter your email address'}
            />
          </FieldWithController>
          {canShowPasswordStrength && (
            <PasswordStrengthMeter
              className="-bottom-5"
              password={watch('password')}
            />
          )}
          <FieldWithController
            required
            control={control as unknown as ControlType}
            label="Password"
            type="password"
            customPattern={{
              value: /^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message: 'Please enter stronger password',
            }}
            error={errors.password}
          >
            <CustomInput
              autoComplete="new-password"
              type={`${hidePassword ? 'password' : 'text'}`}
              id="password"
              name="password"
              placeholder={'Enter your password'}
              onMouseEnter={() => setCanShowPasswordStrength(true)}
              onMouseLeave={() => setCanShowPasswordStrength(false)}
              onTouchStart={() => setCanShowPasswordStrength(true)}
            />
            {passwordDisplayToggle}
          </FieldWithController>
          <FieldWithController
            required
            control={control as unknown as ControlType}
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            error={errors.confirmPassword}
            customPattern={{
              value: new RegExp(watch('password')),
              message: "Passwords doesn't match",
            }}
          >
            <CustomInput
              autoComplete="new-password"
              type={`${hidePassword ? 'password' : 'text'}`}
              id="confirmPassword"
              placeholder={'Enter your password again'}
            />
            {passwordDisplayToggle}
          </FieldWithController>
          <Button
            ripple
            className={`${
              !isSuccess && Object.keys(errors).length !== 0
                ? '!cursor-not-allowed bg-gray-300 hover:bg-gray-300 active:bg-gray-300 border-gray-300 text-white'
                : ''
            } w-full my-8 p-4`}
            role="button"
            type="submit"
            disabled={
              !isSuccess && Object.keys(errors).length !== 0 ? true : false
            }
          >
            {Object.keys(errors).length !== 0
              ? 'Verify information'
              : 'Sign Up'}
          </Button>
        </>
      )}
    </form>
  );
};
