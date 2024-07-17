import PageLayout from '../../components/layouts/PageLayout';
import { useContext } from 'react';
import { PageLoadContext } from '../../App.tsx';

const WalletPage = () => {
  const { user, leaderboardUserData } = useContext(PageLoadContext) || {};

  return (
    <PageLayout>
      {!!user && !!leaderboardUserData && (
        <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px] overflow-auto no-scrollbar'>
          <div className='flex items-center justify-between'></div>
        </div>
      )}
    </PageLayout>
  );
};

export default WalletPage;
