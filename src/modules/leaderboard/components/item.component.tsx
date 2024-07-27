import { ForwardedRef, forwardRef } from 'react';
import { userLeaderBoardInterface } from '../../../libs/user/interfaces';
import ItemContent from './item.content.tsx';

export const Item = forwardRef<HTMLDivElement, userLeaderBoardInterface>(
  (props: userLeaderBoardInterface, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className='w-full flex items-center justify-between gap-5 text-main-white py-2.5 border-b border-[#292C3D] last:border-none'
        ref={ref}
      >
        <ItemContent {...props} />
      </div>
    );
  }
);
