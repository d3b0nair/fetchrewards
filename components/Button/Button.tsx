import { RippleEffect } from '..';
import { ButtonProps } from './Button.props';

export const Button = ({
  ripple,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${
        className ? className : ''
      } relative overflow-hidden outline-none border-2 border-pink-400 focus:border-pink-500 border:bg-pink-600  hover:bg-pink-400 focus:bg-pink-500 active:bg-pink-600 text-slate-900 hover:text-white active:text-white focus:text-white rounded-md transition-all duration-300 text-2xl font-semibold`}
      {...props}
      disabled={disabled}
    >
      {children}
      {ripple && <RippleEffect duration={600} bgColor={'bg-white'} />}
    </button>
  );
};
