import React, { FC, ReactNode, useMemo, createContext, useReducer, useContext } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';

interface IReducerState {
    userWallet: string;
}

enum Actions {
    setUserWallet = 'setUserWallet',
}

interface IAction {
    type: Actions;
    payload: string;
}

// useReducer + useContext Store
const reducerFunc = (state: IReducerState, action: IAction): IReducerState => {
    const { type, payload } = action;
    switch (type) {
        case Actions.setUserWallet:
            return {
                ...state,
                userWallet: payload,
            };
        default:
            return state;
    }
};

export const useStore = (intial: IReducerState) => {
    const [state, dispatch] = useReducer(reducerFunc, intial);
    return { state };
};

type reducerType = ReturnType<typeof useStore>;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const ContextData = createContext<reducerType | null>(null)!;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const UseStateContext = () => useContext(ContextData)!;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
        ],
        [network]
    );

    return (
        <ContextData.Provider value={useStore({ userWallet: '' })}>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>{children}</WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </ContextData.Provider>
    );
};

export default Context;
