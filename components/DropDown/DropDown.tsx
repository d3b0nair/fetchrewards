import { forwardRef } from 'react';
import { DropDownRef, DropDownProps } from './DropDown.props';

export const DropDown = forwardRef<DropDownRef, DropDownProps>(
  ({ values, listName, list, ...props }, ref) => {
    return (
      <select
        ref={ref}
        name={listName}
        id={listName}
        className={`w-full mt-0 md:px-6 px-9 md:py-4 py-6 rounded-md border-2 border-blue-200
          focus:border-pink-400 active:border-pink-400 focus:outline-pink-400 outline-primary`}
        {...props}
      >
        <option value="">Select {listName}</option>
        {list.map((el, i) => (
          <option
            key={`${el}-${i}`}
            value={values ? values[i] : el}
          >
            {el}
          </option>
        ))}
      </select>
    );
  }
);

DropDown.displayName = 'DropDown';
