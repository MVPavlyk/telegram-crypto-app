import { Address, OpenedContract } from 'ton-core';
import { useTonClient } from './useTonClient';
import { GameTon } from '../contracts/GameTon';
import { averageGasFee } from '../constants';

// EQB8StgTQXidy32a8xfu7j4HMoWYV0b0cFM8nXsP2cza_b7Y

export const useGame = () => {
  const { walletAddress, wallet, client } = useTonClient();

  const getGameTonContract = (address: string) => {
    const contract = GameTon.fromAddress(Address.parse(address));

    return client.open(contract);
  };

  const withdraw = (gameAddress: string) => {
    if (!wallet) {
      throw new Error('unable to detect wallet');
    }
    const gameTon = getGameTonContract(gameAddress);

    // gameTon.send(wallet.account., { value: averageGasFee }, 'withdraw');
  };
};
