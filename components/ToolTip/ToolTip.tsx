import React from 'react';
import { ToolTipProps } from './ToolTip.props';

export const ToolTip = ({
  triggered,
  children,
  className,
  ...props
}: ToolTipProps) => {
  return (
    <div
      className={`${
        className ? className : ''
      } relative flex flex-col items-center group`}
      {...props}
    >
      <div
        className={`absolute bottom-0 flex-col items-center ${
          triggered ? 'flex' : 'hidden'
        }`}
      >
        <span className="rounded-2xl relative z-10 p-4 bg-white border-2 border-blue-400 shadow-lg">
          {children}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-blue-400"></div>
      </div>
    </div>
  );
};
