import { Address, beginCell, toNano } from 'ton-core';
import { useTonClient } from './useTonClient';
import { JettonMasterGeneric } from '../contracts/JettonMasterGeneric';
import { JettonWalletGeneric } from '../contracts/JettonWalletGeneric';
import { averageGasFee } from '../constants';
import { SendTransactionRequest, SendTransactionResponse } from '@tonconnect/ui-react';

interface Response {
  sendJettons: (jettonAddress: string, sendTo: string, amount: number) => Promise<SendTransactionResponse>;
}

export const useJetton = (): Response => {
  const { walletAddress, client, sendTransaction } = useTonClient();

  const getJettonContract = (address: string) => {
    const contract = JettonMasterGeneric.fromAddress(Address.parse(address));

    return client.open(contract);
  };

  const getJettonWalletContract = async (jettonAddress: string, walletAddress: string) => {
    const jettonContract = getJettonContract(jettonAddress);
    const address = await jettonContract.getGetWalletAddress(Address.parse(walletAddress));

    return client.open(JettonWalletGeneric.fromAddress(address));
  };

  const getTransferJettonTransaction = (addressTo: string, addressFrom: string, amount: number) => {
    const body = beginCell()
      .storeUint(0xf8a7ea5, 32) // jetton transfer op code
      .storeUint(0, 64) // query_id:uint64
      .storeCoins(amount) // amount:(VarUInteger 16) -  Jetton amount for transfer (decimals = 6 - jUSDT, 9 - default)
      .storeAddress(Address.parse(addressTo)) // destination:MsgAddress
      .storeAddress(Address.parse(addressFrom)) // response_destination:MsgAddress
      .storeUint(0, 1) // custom_payload:(Maybe ^Cell)
      .storeCoins(toNano(0.05)) // forward_ton_amount:(VarUInteger 16) - if >0, will send notification message
      .storeUint(0, 1) // forward_payload:(Either Cell ^Cell)
      .endCell();

    const tx: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [
        {
          address: addressFrom, // sender jetton wallet
          amount: averageGasFee.toString(),
          payload: body.toBoc().toString('base64'), // payload with jetton transfer body
        },
      ],
    };

    return tx;
  };

  const sendJettons = async (jettonAddress: string, sendTo: string, amount: number) => {
    if (!walletAddress) {
      throw new Error('unable to detect wallet address');
    }

    const jettonWallet = await getJettonWalletContract(jettonAddress, walletAddress);

    const tx = getTransferJettonTransaction(sendTo, jettonWallet?.address.toString(), amount);

    return sendTransaction(tx);
  };

  return { sendJettons };
};
