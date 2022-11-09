import Link from 'next/link';
import { MenuItems } from './MenuItems.props';

export const MenuItem = ({ title, href, ...props }: MenuItems): JSX.Element => (
  <Link
    href={href}
    className="text-2xl hover:text-pink-400 transition-colors"
    {...props}
  >
    {title}
  </Link>
);
