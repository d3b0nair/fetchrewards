import { Button } from '../../components';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const HomePage = (): JSX.Element => {
  return (
    <div className={`grid grid-cols-1 content-center`}>
      <h1 className="text-slate-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl">
        Hi!👋 Thank you for checking my assignment!
      </h1>
      <p className="my-6 text-xl text-slate-600 max-w-3xl">
        I appreciate any feedback. You are more than welcome to leave it in the
        comments or to open a new issue for further discussion.
      </p>
      <div className="w-full">
        <Link href="/register/user">
          <Button
            ripple
            className="group w-full md:w-[52%] hover:md:w-[55%] lg:w-[38%] hover:lg:w-[41%] xl:w-[33%] hover:xl:w-[36%] 2xl:w-[39%] hover:2xl:w-[42%]"
          >
            <span className="flex items-center justify-between">
              <span className="p-4 whitespace-nowrap select-none">
                Check out assignment
              </span>
              <span className="border-l-2 border-pink-400 group-hover:border-white group-active:border-white group-focus:border-white ml-0 p-4">
                <ChevronRightIcon className="h-8 w-8" width={1} />
              </span>
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
