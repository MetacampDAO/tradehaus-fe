import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';
import Content from './Components/Dashboard';
import Context from './Context';

export const App: FC = () => {
    return (
        <Context>
            <Content />
        </Context>
    );
};
