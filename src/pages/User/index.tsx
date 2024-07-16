import PageLayout from '../../components/layouts/PageLayout';
import WebApp from '@twa-dev/sdk';
import useFetchUser from '../../libs/user/hooks/useFetchUser';

const UserPage = () => {
  const user = WebApp?.initDataUnsafe?.user;

  const fetchedUser = useFetchUser(user);

  return <PageLayout>{fetchedUser?.telegramUsername}</PageLayout>;
};

export default UserPage;
