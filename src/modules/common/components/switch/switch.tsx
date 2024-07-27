import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { GameMode } from '../../../leaderboard/constants';

interface Props {
  options: {
    onClick: React.Dispatch<React.SetStateAction<GameMode | string>>;
    icon?: ReactNode;
    value: GameMode | string;
  }[];
  selectedValue: GameMode | string;
  isDark?: boolean;
}

export const Switch = ({ options, selectedValue, isDark = true }: Props) => {
  return (
    <div className='w-full grid grid-cols-2 gap-2.5'>
      {options.map(({ onClick, value, icon }) => (
        <button
          key={value}
          onClick={() => onClick(value)}
          className={classNames(
            'default-btn text-2xl h-[50px] font-semibold w-full',
            value !== selectedValue ? (isDark ? 'main-blue-btn-dark' : 'main-blue-btn') : ''
          )}
        >
          {icon ? icon : value}
        </button>
      ))}
    </div>
  );
};
