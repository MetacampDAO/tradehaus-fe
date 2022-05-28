import { useAnchorWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useState } from 'react';
import NoWallet from '../components/NoWallet';
import "react-datepicker/dist/react-datepicker.css";
import { createGameFe, initTradehaus, TradehausClient } from '../tradehaus';
import { PublicKey } from '@solana/web3.js';
import GameManage from './components/Game';
import { Connection } from '@solana/web3.js';

export interface GameManage {
  gameKey: PublicKey,
  hostKey: PublicKey,
  rewardMint: PublicKey,
  rewards: number,
  startTime: number,
  endTime: number
}

const Manage = () => {
  const wallet = useAnchorWallet();
  const [gamesManage, setGamesManage] = useState<GameManage[]>([]);
  const conn = new Connection("https://api.devnet.solana.com")

  useEffect(() => {
    (async () => {
      if (wallet) {
        const th = await initTradehaus(conn, wallet as any)
        const allGameAccs = await th.fetchAllGameAcc(wallet.publicKey);
        setGamesManage(allGameAccs
          .sort((row) => Number(row.account.joinTime))
          // .filter((row) => Number(row.account.startTime) > (Date.now() / 1000))
          .reverse().map((row, index) => {
            return {
              gameKey: row.publicKey,
              hostKey: row.account.host,
              rewardMint: row.account.rewardMint,
              rewards: Number(row.account.rewardAmount),
              startTime: Number(row.account.startTime),
              endTime: Number(row.account.endTime)
            }
          })
        )
      }
    })();
  }, [wallet])

  return (
    <>
      {wallet ? (
        <div className="grid mt-8 mx-4 md:mx-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {gamesManage.map((row, index) => {
            return (
              <GameManage
                key={index}
                gameKey={row.gameKey}
                hostKey={row.hostKey}
                rewardMint={row.rewardMint}
                rewards={row.rewards}
                startTime={row.startTime}
                endTime={row.endTime}/>
            )
          })}
        </div>
      ) : <NoWallet />
      }
    </>
  );
};

export default Manage;