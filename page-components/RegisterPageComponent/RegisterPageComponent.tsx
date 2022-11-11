import Image from 'next/legacy/image';

import { UserRegistrationForm } from '../../components';
import { FetchRewardsForm } from '../../interfaces/fetchrewards.interface';

export const RegisterPageComponent = ({
  regData,
}: {
  regData: FetchRewardsForm;
}): JSX.Element => {
  return (
    <div
      className={`border-t-4 md:border-t-0 border-pink-400 overflow-hidden flex flex-col md:grid md:grid-cols-[1fr_1fr] xl:grid-cols-[2fr_1fr] grid-rows-2 sm:grid-rows-1 content-center justify-center rounded-lg shadow-2xl mb-24 w-full`}
    >
      <div className="relative h-[300px] md:h-full w-full">
        <Image
          src={'/register/user/pageCover.jpg'}
          alt={'Cloud'}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <UserRegistrationForm
        className=" bg-white border-t-4 md:border-t-0 border-pink-400 rounded-t-none md:rounded-t-lg"
        data={regData}
      />
    </div>
  );
};
