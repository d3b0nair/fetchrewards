const Footer = (): JSX.Element => (
  <footer className="flex flex-col items-center selection:bg-pink-400 selection:text-white my-4">
    <span>Copyright © {new Date().getFullYear()} Arsen Krochak</span>
  </footer>
);
export default Footer;
