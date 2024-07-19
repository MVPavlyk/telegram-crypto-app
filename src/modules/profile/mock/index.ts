import { History } from '../types/profile.types';

export const mockHistory: History[] = [
  {
    id: 'test1',
    win: true,
    mode: 2,
    opponent: {
      id: 'test1',
      telegramId: 123,
      telegramUsername: 'gxibj',
      avatar: {
        eyes: '#FA9825',
        hood: '#E9F939',
      },
      rank: 1,
    },
  },
  {
    id: 'test2',
    win: false,
    mode: 10,
  },
  {
    id: 'test3',
    win: true,
    mode: 2,
    opponent: {
      id: 'test1',
      telegramId: 123,
      telegramUsername: 'kakwrwerwerwerwera',
      avatar: {
        eyes: '#FA9825',
        hood: '#F32AAE',
      },
      rank: 1,
    },
  },
  {
    id: 'test4',
    win: false,
    mode: 2,
    opponent: {
      id: 'test1',
      telegramId: 123,
      telegramUsername: 'usir1',
      avatar: {
        eyes: '#F32AAE',
        hood: '#FA9825',
      },
      rank: 1,
    },
  },
];
