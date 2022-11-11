import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RippleEffectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  bgColor: string;
  duration: number;
  rippleSize?: number;
}
