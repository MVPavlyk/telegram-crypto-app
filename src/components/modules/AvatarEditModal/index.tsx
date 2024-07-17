import React, { useState } from 'react';
import Avatar from '../Avatar';
import SwitchButtons from '../../units/SwitchButtons';
import HoodEdit from '../../../assets/icons/HoodEdit.tsx';
import EyeEdit from '../../../assets/icons/EyeEdit.tsx';
import classNames from 'classnames';
import CloseModal from '../../../assets/icons/CloseModal.tsx';
import { TAvatar } from '../../../types/common.ts';

type AvatarEditModalProps = {
  defaultAvatar: TAvatar;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAvatar: React.Dispatch<React.SetStateAction<TAvatar | undefined>>;
};

const colors: string[] = ['#3F56EB', '#E9F939', '#393939', '#A342EF', '#3EDC4E', '#FA9825', '#F32AAE', '#F72122'];

const AvatarEditModal: React.FC<AvatarEditModalProps> = ({ defaultAvatar, setIsModalOpen, setAvatar }) => {
  const { eyes: defaultEyes, hood: defaultHood } = defaultAvatar;

  const [editCase, setEditCase] = useState('hood');

  const [eyes, setEyes] = useState(defaultEyes);

  const [hood, setHood] = useState(defaultHood);

  const saveAvatar = () => {
    setAvatar({ eyes, hood });
    setIsModalOpen(false);
  };

  return (
    <div className='h-screen w-screen absolute top-0 left-0 z-[6] blur-modal-bg flex items-center justify-center px-5'>
      <div className='w-full p-6 modal-shadow rounded-[20px] bg-[#1B1D2D] relative flex flex-col items-center justify-center'>
        <button onClick={() => setIsModalOpen(false)} className='absolute top-7 right-7 cursor-pointer'>
          <CloseModal />
        </button>
        <Avatar size={120} eyes={eyes} hood={hood} />
        <div className='mt-5 w-full'>
          <SwitchButtons
            selectedValue={editCase}
            options={[
              { value: 'hood', Icon: HoodEdit, setValue: setEditCase },
              { value: 'eye', Icon: EyeEdit, setValue: setEditCase },
            ]}
          />
        </div>
        <div className='w-full grid grid-cols-4 px-1 items-center justify-center gap-2.5 mt-5'>
          {colors.map((color) => (
            <div className='flex flex-col items-center justify-center' key={color}>
              <button
                onClick={() => {
                  if (editCase === 'hood') {
                    setHood(color);
                  } else {
                    setEyes(color);
                  }
                }}
                className={classNames('h-[65px] max-w-[65px] w-[65px] border-none rounded-[10px]')}
                style={{ backgroundColor: color }}
              ></button>
            </div>
          ))}
        </div>
        <button onClick={saveAvatar} className='text-2xl font-bold default-btn w-full h-16 mt-5'>
          Save
        </button>
      </div>
    </div>
  );
};

export default AvatarEditModal;
