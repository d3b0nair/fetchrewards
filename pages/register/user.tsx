import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FetchRewardsForm } from '../../interfaces/fetchrewards.interface';
import { getRegData } from '../../lib/fetchrewards';
import { RegisterPageComponent } from '../../page-components';

export default function CreateNewUserPage({ regData }: CreateNewUserPageProps) {
  return <RegisterPageComponent regData={regData} />;
}
export async function getStaticProps() {
  const regData = await getRegData();
  if (!regData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { regData },
  };
}

interface CreateNewUserPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  regData: FetchRewardsForm;
}
