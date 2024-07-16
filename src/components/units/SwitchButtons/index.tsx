import React from 'react';
import classNames from 'classnames';

type SwitchButtonProps = {
  options: {
    setValue: React.Dispatch<React.SetStateAction<string>>;
    Icon?: () => JSX.Element;
    value: string;
  }[];
  selectedValue: string;
};

const SwitchButtons: React.FC<SwitchButtonProps> = ({ options, selectedValue }) => {
  return (
    <div className='w-full grid grid-cols-2 gap-2.5'>
      {options.map(({ setValue, value, Icon }) => (
        <button
          key={value}
          onClick={() => setValue(value)}
          className={classNames(
            'default-btn text-2xl h-[50px] font-semibold w-full',
            value !== selectedValue && 'main-blue-btn'
          )}
        >
          {Icon ? <Icon /> : value}
        </button>
      ))}
    </div>
  );
};

export default SwitchButtons;
