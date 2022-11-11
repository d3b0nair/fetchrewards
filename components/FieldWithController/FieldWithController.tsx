import React from 'react';
import { Controller } from 'react-hook-form';
import { InputErrorMsg } from '..';
import { FieldWithControllerProps } from './FieldWithController.props';

export const FieldWithController = ({
  id,
  label,
  type,
  control,
  customPattern,
  required,
  className,
  children,
}: FieldWithControllerProps): JSX.Element => {
  return (
    <span className={`${className ? className : ''} relative mb-4 sm:mb-2`}>
      {label && (
        <label
          htmlFor={id ? id : type}
          className="text-darkestGrey font-semibold"
        >
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={id ? id : type}
        defaultValue={''}
        rules={{
          required: {
            value: required ? required : false,
            message: `${label ? label : 'Field'} can't be empty`,
          },
          pattern: customPattern ? customPattern : undefined,
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  ...field,
                });
              }
              return child;
            })}
            <InputErrorMsg error={error} />
          </>
        )}
      />
    </span>
  );
};
