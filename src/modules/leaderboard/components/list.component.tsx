import { userLeaderBoardInterface } from '../../../libs/user/interfaces';
import React from 'react';
import { Item } from './item.component';
import { useAppStore } from '../../common/store';
import ItemContent from './item.content.tsx';

interface LeaderboardListProps {
  list: userLeaderBoardInterface[];
  lastUserElementRef: (node: HTMLDivElement | null) => void;
}

export const List: React.FC<LeaderboardListProps> = ({ list, lastUserElementRef }: LeaderboardListProps) => {
  const { statistics } = useAppStore((state) => ({ ...state, user: state.user!, statistics: state.statistics! }));

  return (
    <section className='relative w-full h-full max-h-full mt-[30px]'>
      {statistics && (
        <div className='default-btn absolute bottom-0 w-full z-10 flex items-center justify-between px-4 h-[76px]'>
          <ItemContent {...statistics} telegramUsername='You' />
        </div>
      )}
      <div className='w-full flex flex-col h-[calc(100%-76px)] max-h-[calc(100%-76px)] relative overflow-auto no-scrollbar'>
        {Array.isArray(list) &&
          list.map((user: userLeaderBoardInterface, index: number) => {
            return <Item key={user.userId} {...user} ref={list.length - 1 === index ? lastUserElementRef : null} />;
          })}
      </div>
    </section>
  );
};
