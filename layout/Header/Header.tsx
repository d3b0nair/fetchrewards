import { MenuItem } from '../../components/index';

const Header = (): JSX.Element => (
  <header className="flex flex-rows justify-between mx-auto px-6 md:px-14 xl:px-24 my-10">
    <MenuItem title="🚀" href="/" />
    <div className="hidden md:flex justify-end gap-6">
      <MenuItem title="Home" href="/" />
      <MenuItem title="Assignment" href="/register/user" />
      <MenuItem
        title="GitHub"
        href="https://github.com/d3b0nair"
        target="_blank"
      />
    </div>
  </header>
);
export default Header;
