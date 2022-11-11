import { DetailedHTMLProps } from 'react';

export interface PasswordStrengthMeterProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  password: string;
}
