import { RippleEffect } from '..';
import { ButtonProps } from './Button.props';

export const Button = ({
  ripple,
  children,
  className,
  ...props
}: ButtonProps) => (
  <button
    className={`${
      className ? className : ''
    } relative overflow-hidden outline-none border-2 border-pink-400 hover:bg-pink-400 text-slate-900 hover:text-white rounded-md transition-all duration-300 text-2xl font-semibold`}
    {...props}
  >
    {children}
    {ripple && <RippleEffect duration={600} bgColor={'bg-white'} />}
  </button>
);
