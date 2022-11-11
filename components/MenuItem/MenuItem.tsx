import Link from 'next/link';
import { MenuItems } from './MenuItems.props';

export const MenuItem = ({ title, href, ...props }: MenuItems): JSX.Element => (
  <Link
    href={href}
    className="pb-2 text-2xl hover:text-pink-400 hover:border-pink-400 border-white border-b-2 active:text-pink-600 transition-all"
    {...props}
  >
    {title}
  </Link>
);
