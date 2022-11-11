import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { CustomInputProps } from './CustomInput.props';

export const CustomInput = forwardRef<
  HTMLInputElement,
  PropsWithChildren<CustomInputProps>
>(
  (
    { ...props }: CustomInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        ref={ref}
        className="w-full mt-0 md:px-6 px-9 md:py-4 py-6 rounded-md text-sm text-grey focus:text-black border-2 border-blue-200 focus:outline-pink-400 outline-primary"
        {...props}
      />
    );
  }
);
CustomInput.displayName = 'CustomInput';
