import { WinHistoryItem } from '../types/win.history.types.ts';
import { GameMode } from '../../leaderboard/constants';
import HistoryItemComponent from './history.item.component.tsx';

const HistoryList = () => {
  const historyMock: WinHistoryItem[] = [
    {
      winSum: 100,
      type: GameMode.OneVsNine,
    },
    {
      winSum: 400,
      type: GameMode.OneVsOne,
      opponent: {
        id: 'rtest',
        telegramId: 1111,
        telegramUsername: 'teejz',
        avatar: {
          eyes: '#FA9825',
          hood: '#393939',
        },
      },
    },
    {
      winSum: 10,
      type: GameMode.OneVsNine,
    },
  ];

  return (
    <div className='mt-5'>
      <h4 className='text-xl text-white font-normal'>Successful Games</h4>
      <div className='mt-5'>
        {historyMock.map((data, index) => (
          <HistoryItemComponent key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
