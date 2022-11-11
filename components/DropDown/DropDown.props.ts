import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export interface DropDownProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  values?: Array<string>;
  listName: string;
  list: Array<string>;
}
export type DropDownRef = HTMLSelectElement;
