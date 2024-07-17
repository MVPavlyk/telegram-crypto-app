import PageLayout from '../../components/layouts/PageLayout';
import Avatar from '../../components/modules/Avatar';
import editAvatar from '../../assets/icons/editAvatar.svg';
import { useContext, useEffect, useState } from 'react';
import AvatarEditModal from '../../components/modules/AvatarEditModal';
import { PageLoadContext } from '../../App.tsx';
import { TAvatar } from '../../types/common.ts';
import { userServices } from '../../services/user.services.ts';

const UserPage = () => {
  const { user, leaderboardUserData, setUser } = useContext(PageLoadContext) || {};

  const [avatar, setAvatar] = useState<TAvatar | undefined>(user?.avatar);

  useEffect(() => {
    if (user?.avatar) setAvatar(user.avatar);
  }, [user?.avatar]);

  useEffect(() => {
    if (setUser && avatar && user?.avatar && JSON.stringify(user?.avatar) !== JSON.stringify(avatar)) {
      const newUser = { avatar, username: user?.telegramUsername };

      userServices.updateUser(user.telegramId, newUser).then((value) => setUser(value));
    }
  }, [avatar]);

  const [isEditModalOpen, setIsEditModelOpen] = useState(false);

  const userInfo = [
    {
      label: 'Games played',
      value: leaderboardUserData?.gamesPlayed,
    },
    {
      label: 'Biggest win',
      value: leaderboardUserData?.biggestWin,
    },
  ];

  return (
    <PageLayout>
      {!!user && !!leaderboardUserData && (
        <>
          <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px] overflow-auto'>
            <div className='w-full flex items-center gap-x-4'>
              <button
                onClick={() => setIsEditModelOpen(!isEditModalOpen)}
                className='relative border-none bg-transparent cursor-pointer'
              >
                {avatar && <Avatar size={120} {...avatar} />}
                <div className='absolute bottom-0 right-0 h-6 w-6'>
                  <img src={editAvatar} alt='edit' />
                </div>
              </button>
              <div>
                <h3 className='text-xl text-white font-semibold'>{user.telegramUsername}</h3>
                <h5 className='text-base text-white font-regular'>#{leaderboardUserData.rank} at Leaderboard</h5>
                <div className='text-2xl text-main-orange font-bold mt-1'> {leaderboardUserData.sumWon} $</div>
              </div>
            </div>
            <div className='w-full grid grid-cols-2 mt-[30px]'>
              {userInfo.map(({ label, value }) => (
                <div key={label} className='px-2 w-full flex flex-col items-center gap-y-2'>
                  <div className='text-xl text-white opacity-80'>{label}</div>
                  <div className='text-3xl font-bold text-white'>{value}</div>
                </div>
              ))}
            </div>
            <div className='w-full mt-8'>
              <button className='h-16 max-w-[320px] w-full text-[24px] font-[600] default-btn'>See all history</button>
            </div>
          </div>
          {avatar && isEditModalOpen && (
            <AvatarEditModal setAvatar={setAvatar} setIsModalOpen={setIsEditModelOpen} defaultAvatar={avatar} />
          )}
        </>
      )}
    </PageLayout>
  );
};

export default UserPage;
