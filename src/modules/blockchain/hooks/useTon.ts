import { toNano } from 'ton-core';
import { averageGasFee } from '../constants';
import { useTonClient } from './useTonClient';
import { SendTransactionRequest, SendTransactionResponse } from '@tonconnect/ui-react';

interface Response {
  sendTon: (amount: number) => Promise<SendTransactionResponse>;
}

export const useTon = (): Response => {
  const { walletAddress, sendTransaction } = useTonClient();
  const getTransferTonTransaction = (addressTo: string, amount: number) => {
    const tx: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [
        {
          address: addressTo,
          amount: String(toNano(amount) + averageGasFee),
        },
      ],
    };

    return tx;
  };

  const sendTon = (amount: number) => {
    if (!walletAddress) {
      throw new Error('unable to detect wallet address');
    }

    const tx = getTransferTonTransaction(walletAddress, amount);

    return sendTransaction(tx);
  };

  return { sendTon };
};
