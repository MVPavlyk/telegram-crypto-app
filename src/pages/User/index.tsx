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

  return (
    <PageLayout>
      <div className='w-full h-[calc(100vh-90px)] px-5 pt-[30px]'>
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
