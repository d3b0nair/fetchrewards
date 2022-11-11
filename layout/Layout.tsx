import {
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
  KeyboardEvent,
  useRef,
} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
    useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);
  };
  return (
    <>
      <div className="xl:mx-auto max-w-[1600px] scroll-smooth mx-auto max-h-max font-sans overflow-hidden selection:bg-pink-400 selection:text-white">
        <span
          className={`${
            isSkipLinkDisplayed
              ? 'h-auto'
              : 'block fixed top-[0] left-[100px] h-0 overflow-hidden'
          }`}
          onKeyDown={skipContentAction}
          onFocus={() => setIsSkipLinkDisplayed(true)}
          tabIndex={0}
        >
          Skip to main content
        </span>
        <Header />
        <main
          className="flex h-full w-full focus:outline-8 mx-auto px-6 md:px-14 xl:px-24 min-h-calc"
          ref={bodyRef}
          tabIndex={0}
          role="main"
        >
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}
