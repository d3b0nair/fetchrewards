import { DetailedHTMLProps } from 'react';

export interface ToolTipProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  triggered: boolean;
  children: React.ReactNode;
}
