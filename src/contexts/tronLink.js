import React, { useEffect, ReactNode } from "react";
import { createTrackedSelector } from "react-tracked";
import { toast } from "react-toastify";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import BigNumber from "bignumber.js";
import { WEFUND_TRON_WALLET } from "../config/constants";

const defaultStates = {
  connected: false,
  account: "",
  balance: new BigNumber("0"),
  initialized: false,
  initializing: true,
  tronWeb: undefined,
};

export const useTronLinkStore = create(
  subscribeWithSelector((set, get) => ({
    ...defaultStates,
    clear: () => set({ ...defaultStates }),
    connect: async () => {
      try {
        if (window.tronWeb) {
          const tronWeb = window.tronWeb;
          const tronLink = window.tronLink;
          await tronLink.request({
            method: "tron_requestAccounts",
          });
          const account = tronWeb.defaultAddress.base58;

          set({
            connected: true,
            account: account,
            tronWeb: tronWeb,
          });
        }
      } catch (err) {
        console.log(err);
        toast.error(err?.message);
        set({ initializing: false });
      }
    },
    disconnect: async () => {
      window.localStorage.clear();
      get().clear();
      set({ initializing: false });
      set({ connected: false });
    },
    getBalance: () => get().balance,
    getBalanceString: () => {
      const balance = get().balance.dividedBy(10 ** 6);
      return balance.toFixed() + " TRX";
    },
    sendTokens: async (
      amount,
      denom,
      addr,
      native,
    ) => {
      const account = get().account;
      const tronWeb = get().tronWeb;

      if (native) {
        const tx = await tronWeb.transactionBuilder.sendTrx(
          WEFUND_TRON_WALLET,
          amount,
          account
        );
        const signedTx = await tronWeb.trx.sign(tx);
        const broastTx = await tronWeb.trx.sendRawTransaction(signedTx);
      } else {
        const contract = await tronWeb.contract().at(addr);

        // const balance = await contract.balanceOf(account).call();
        // const val = BigNumber.from(balance);

        await contract.transfer(WEFUND_TRON_WALLET, amount).send({
          feeLimit: 100_000_000,
          callValue: 0,
          shouldPollResponse: true,
        });
      }
    },
  }))
);
export const useTronLink =
  createTrackedSelector(useTronLinkStore);

export const TronLinkProvider = ({ children }) => {
  return (
    <>
      {children}
      <WalletSubscription />
    </>
  );
};

const WalletSubscription = () => {
  useEffect(() => {
    return useTronLinkStore.subscribe(
      (x) => x.connected,
      async (connected) => {
        const tronWeb = useTronLinkStore.getState().tronWeb;

        const balance = await tronWeb.trx.getBalance(
          useTronLinkStore.getState().account
        );

        useTronLinkStore.setState({ balance: new BigNumber(balance) });
        useTronLinkStore.setState({ initialized: true });
      }
    );
  }, []);

  return null;
};