import { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  options: {
    onClick: Function;
    icon?: ReactNode;
    value: string;
  }[];
  selectedValue: string;
}

export const Switch = ({ options, selectedValue }: Props) => {
  return (
    <div className='w-full grid grid-cols-2 gap-2.5'>
      {options.map(({ onClick, value, icon }) => (
        <button
          key={value}
          onClick={() => onClick(value)}
          className={classNames(
            'default-btn text-2xl h-[50px] font-semibold w-full',
            value !== selectedValue && 'main-blue-btn'
          )}
        >
          {icon ? icon : value}
        </button>
      ))}
    </div>
  );
};
