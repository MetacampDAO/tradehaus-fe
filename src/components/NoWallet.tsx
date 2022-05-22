import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const NoWallet = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50" style={{ height: "80vh" }}>
      <div className="bg-white rounded-lg shadow-lg p-10 w-5/12">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="font-bold text-7xl text-gray-700 w-4/6 text-center">🚫</h1>
          <h1 className="font-bold text-2xl text-gray-700 w-5/6 text-center pb-5">Connect  wallet to continue</h1>
          <WalletMultiButton/>
        </div>
      </div>
    </div>
  );
};

export default NoWallet;