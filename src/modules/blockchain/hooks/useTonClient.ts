import { useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';
import { TonClient } from 'ton';

export const useTonClient = () => {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  const client = new TonClient({ endpoint: import.meta.env.HTTP_ENDPOINT });

  return {
    wallet,
    walletAddress: wallet?.account.address,
    client,
    sendTransaction: tonConnectUI.sendTransaction,
  };
};
