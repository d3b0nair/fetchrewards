import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Control, FieldError, ValidationRule } from 'react-hook-form';

export interface FieldWithControllerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label?: string | undefined;
  id?: string;
  type: 'fullName' | 'email' | 'password' | 'occupation' | 'state' | 'text';
  className?: string | undefined;
  control: Control;
  required?: boolean;
  customPattern?: ValidationRule<RegExp> | undefined;
  error?: FieldError | undefined;
}
