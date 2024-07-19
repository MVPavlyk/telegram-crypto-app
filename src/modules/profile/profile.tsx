import editAvatar from '../../assets/icons/editAvatar.svg';
import { useEffect, useState } from 'react';
import { Avatar } from '../common/components/avatar/avatar.tsx';
import { GamesHistory } from './components/history.tsx';
import { AvatarEditModal } from '../common/components/avatar-edit-modal/avatar-edit-modal.tsx';
import { mockHistory } from './mock/index.ts';
import { ProfileApi } from './api/profile.api.ts';
import { useAppStore } from '../common/store/index.ts';
import { AvatarType } from '../common/types/index.ts';

export const Profile = () => {
  const { user, statistics } = useAppStore((state) => ({ ...state, user: state.user!, statistics: state.statistics! }));

  const [avatar, setAvatar] = useState<AvatarType | null>(null);

  const history = mockHistory;

  const { mutateAsync: updateOne } = ProfileApi.useUpdateOne();

  const handleUpdateUser = async (data: { avatar: AvatarType }) => {
    await updateOne({ id: user.id, ...data });
    setAvatar(null);
  };

  useEffect(() => {
    if (avatar) {
      handleUpdateUser({ avatar });
    }
  }, [avatar]);

  const [isEditModalOpen, setIsEditModelOpen] = useState(false);

  const userInfo = [
    {
      label: 'Games played',
      value: statistics.gamesPlayed,
    },
    {
      label: 'Biggest win',
      value: statistics.biggestWin,
    },
  ];

  return (
    <>
      {!!user && (
        <>
          <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px] overflow-auto no-scrollbar'>
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
                <h5 className='text-base text-white font-regular'>#{statistics.rank} at Leaderboard</h5>
                <div className='text-2xl text-main-orange font-bold mt-1'> {statistics.sumWon} $</div>
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
            {!!history.length && (
              <div className='w-full mt-8 flex flex-col items-center'>
                <div className='w-full text-left text-white text-xl'>History</div>
                {history.map(({ win, opponent }) => (
                  <GamesHistory userAvatar={user.avatar} opponent={opponent} win={win} />
                ))}
                <button className='h-16 w-full text-[24px] mt-5 font-[600] default-btn'>See all history</button>
              </div>
            )}
          </div>
          {isEditModalOpen && (
            <AvatarEditModal setAvatar={setAvatar} setIsModalOpen={setIsEditModelOpen} defaultAvatar={user.avatar} />
          )}
        </>
      )}
    </>
  );
};
