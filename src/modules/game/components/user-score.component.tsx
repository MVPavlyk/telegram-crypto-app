import React from 'react';
import classNames from 'classnames';
import { Avatar } from '../../common/components/avatar/avatar.tsx';
import { TUserScore } from '../types/game.types.ts';

const UserScoreComponent: React.FC<TUserScore & { className?: string }> = ({ user, score, className = '' }) => {
  if (!user) return;

  const { avatar, telegramUsername } = user;

  return (
    <div className={classNames('absolute flex items-center gap-x-2.5 z-[5]', className)}>
      <Avatar {...avatar} size={40} />
      <div>
        <h4 className='text-white'>{telegramUsername}</h4>
        <h6 className='text-sm font-semibold text-white'>
          {score} {Math.abs(score) === 1 ? 'point' : 'points'}{' '}
        </h6>
      </div>
    </div>
  );
};

export default UserScoreComponent;
