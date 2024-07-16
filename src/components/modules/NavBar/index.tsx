import { Link, matchPath, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import HomeIcon from '../../../assets/icons/Home';
import LeaderboardIcon from '../../../assets/icons/Leaderboard';
import UserIcon from '../../../assets/icons/User';
import WalletIcon from '../../../assets/icons/Wallet';

const NavBar = () => {
  const { pathname } = useLocation();

  const routes: { route: string; Icon: ({ isSelected }: { isSelected: boolean }) => JSX.Element }[] = [
    {
      route: ROUTES.HOME,
      Icon: HomeIcon,
    },
    {
      route: ROUTES.LEADERBOARD,
      Icon: LeaderboardIcon,
    },
    {
      route: ROUTES.USER,
      Icon: UserIcon,
    },
    {
      route: ROUTES.WALLET,
      Icon: WalletIcon,
    },
  ];

  return (
    <div className='pt-2.5 pb-12 w-full z-[5] absolute bottom-0 flex items-center justify-evenly'>
      {routes.map(({ route, Icon }) => (
        <Link to={route}>
          <Icon isSelected={!!matchPath(route, pathname)} />
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
