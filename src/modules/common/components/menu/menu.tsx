import { Link, matchPath, useLocation } from 'react-router-dom';
import { Routes } from '../../constants';
import HomeIcon from '../../../../assets/icons/Home';
import LeaderboardIcon from '../../../../assets/icons/Leaderboard';
import UserIcon from '../../../../assets/icons/User';
import WalletIcon from '../../../../assets/icons/Wallet';

export const Menu = () => {
  const { pathname } = useLocation();

  const routes: { route: string; Icon: ({ isSelected }: { isSelected: boolean }) => JSX.Element }[] = [
    {
      route: Routes.HOME,
      Icon: HomeIcon,
    },
    {
      route: Routes.LEADERBOARD,
      Icon: LeaderboardIcon,
    },
    {
      route: Routes.PROFILE,
      Icon: UserIcon,
    },
    {
      route: Routes.WALLET,
      Icon: WalletIcon,
    },
  ];

  return (
    <div className='pt-2.5 pb-12 w-full z-[5] absolute bottom-0 flex items-center justify-evenly'>
      {routes.map(({ route, Icon }) => (
        <Link key={route} to={route}>
          <Icon isSelected={!!matchPath(route, pathname)} />
        </Link>
      ))}
    </div>
  );
};
