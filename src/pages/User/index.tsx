import PageLayout from '../../components/layouts/PageLayout';
import WebApp from '@twa-dev/sdk';
import useFetchUser from '../../libs/user/hooks/useFetchUser';
import Avatar from '../../components/modules/Avatar';
import editAvatar from '../../assets/icons/editAvatar.svg';
import { useState } from 'react';
import AvatarEditModal from '../../components/modules/AvatarEditModal';
import { TAvatar } from '../../types/common.ts';

const UserPage = () => {
  const [avatar, setAvatar] = useState<TAvatar>({ hood: '#E9F939', eyes: '#3F56EB' });

  const [isEditModalOpen, setIsEditModelOpen] = useState(false);

  const user = WebApp?.initDataUnsafe?.user;

  const fetchedUser = useFetchUser(user);

  const userInfo = [
    {
      label: 'Games played',
      value: '120',
    },
    {
      label: 'Biggest win',
      value: '546,3 $',
    },
  ];

  return (
    <PageLayout>
      <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px] overflow-auto'>
        <div className='w-full flex items-center gap-x-4'>
          <button
            onClick={() => setIsEditModelOpen(!isEditModalOpen)}
            className='relative border-none bg-transparent cursor-pointer'
          >
            <Avatar size={120} {...avatar} />
            <div className='absolute bottom-0 right-0 h-6 w-6'>
              <img src={editAvatar} alt='edit' />
            </div>
          </button>
          <div>
            <h3 className='text-xl text-white font-semibold'>user23689</h3>
            <h5 className='text-base text-white font-regular'>#653 at Leaderboard</h5>
            <div className='text-2xl text-main-orange font-bold mt-1'> 546,3 $</div>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 mt-[30px]'>
          {userInfo.map(({ label, value }) => (
            <div key={value} className='px-2 w-full flex flex-col items-center gap-y-2'>
              <div className='text-xl text-white opacity-80'>{label}</div>
              <div className='text-3xl font-bold text-white'>{value}</div>
            </div>
          ))}
        </div>
        <div className='w-full mt-8'>
          <button className='h-16 max-w-[320px] w-full text-[24px] font-[600] default-btn'>See all history</button>
        </div>

        {fetchedUser?.telegramUsername}
      </div>
      {isEditModalOpen && (
        <AvatarEditModal
          setAvatar={setAvatar}
          setIsModalOpen={setIsEditModelOpen}
          defaultAvatar={{ eyes: '#F72122', hood: '#E9F939' }}
        />
      )}
    </PageLayout>
  );
};

export default UserPage;
