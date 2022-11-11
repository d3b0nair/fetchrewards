import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { ToolTip } from '..';
import { PasswordStrengthMeterProps } from './PasswordStrengthMeter.props';

export const PasswordStrengthMeter = ({
  password,
  ...props
}: PasswordStrengthMeterProps) => {
  const eightCharactersRegex = new RegExp('[a-zA-Z]+.{8,}').test(`${password}`);
  const capitalLetterRegex = new RegExp('[A-Z]').test(`${password}`);
  const lowerCaseLetterRegex = new RegExp('[a-z]').test(`${password}`);
  const specialCharRegex = new RegExp('[!@#$&*]').test(`${password}`);
  const numRegex = new RegExp('[0-9]').test(`${password}`);
  const allRegexPass =
    numRegex &&
    specialCharRegex &&
    lowerCaseLetterRegex &&
    capitalLetterRegex &&
    eightCharactersRegex;
  const SuccessIcon = () => (
    <CheckIcon className="text-green-500 h-5 w-5" width={1} />
  );
  const FailIcon = () => (
    <XMarkIcon className="text-red-500 h-5 w-5" width={1} />
  );
  const RuleLine = ({ rule, regex }: { rule: string; regex: boolean }) => (
    <span className={`${regex ? 'text-green-500' : 'text-red-500'} flex`}>
      {regex ? <SuccessIcon /> : <FailIcon />} {rule}
    </span>
  );

  return (
    <ToolTip
      triggered={password !== undefined && password.length > 0 && !allRegexPass}
      {...props}
    >
      <div className="flex flex-col">
        <RuleLine
          rule="At least 8 characters
          long"
          regex={eightCharactersRegex}
        />
        <RuleLine rule="At least 1 capital letter" regex={capitalLetterRegex} />
        <RuleLine
          rule="At least 1 lowercase letter"
          regex={lowerCaseLetterRegex}
        />
        <RuleLine
          rule="At least 1 special character"
          regex={specialCharRegex}
        />
        <RuleLine rule="At least 1 numeric character" regex={numRegex} />
      </div>
    </ToolTip>
  );
};
