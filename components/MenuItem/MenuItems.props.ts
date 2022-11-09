import { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export interface MenuItems extends LinkProps {
  children?: ReactNode;
  className?: string | undefined;
  title: string;
  target?: string;
}
