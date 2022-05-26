import { useAnchorWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useState } from 'react';
import NoWallet from '../components/NoWallet';
import "react-datepicker/dist/react-datepicker.css";
import { UserOutlined, DollarOutlined } from '@ant-design/icons';
import Game from './components/Game';
import { createGameFe, initTradehaus, TradehausClient } from '../tradehaus';
import { PublicKey } from '@solana/web3.js';
import { Connection } from '@metaplex/js';

export interface GameJoin {
  gameKey: PublicKey,
  hostKey: PublicKey,
  rewardMint: PublicKey,
  rewards: number,
  startTime: number,
  endTime: number
}

const Join = () => {
  const wallet = useAnchorWallet();
  const [gamesPreview, setGamesPreview] = useState<GameJoin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const conn = new Connection("https://api.devnet.solana.com")

  useEffect(() => {
    (async () =>  {
      if (wallet){
        const th = await initTradehaus(conn, wallet as any)
        const allGameAccs = await th.fetchAllGameAcc();
        setGamesPreview(allGameAccs
          .sort((row)=> Number(row.account.joinTime))
          .filter((row) => Number(row.account.startTime) > Date.now()/1000)
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

  const onJoin = async (gamePubKey: PublicKey) => {

    setIsLoading(true)
    if (wallet && wallet.publicKey) {
      try {
        const th = await initTradehaus(conn, wallet as any)
        const [player_fund_pda, player_fund_bump] = await th.findPlayerFundPDA(
          wallet.publicKey,
          gamePubKey
        );
        
        const {txSig} = await th.joinGame(
          gamePubKey,
          wallet.publicKey,
          player_fund_pda,
          player_fund_bump
        )
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <>
      {wallet ? (
        <div className="grid mt-8 mx-4 md:mx-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {gamesPreview.map((row, index) => {
            return (
              <Game
                key={index}
                gameKey={row.gameKey}
                hostKey={row.hostKey}
                rewardMint={row.rewardMint}
                rewards={row.rewards}
                startTime={row.startTime}
                endTime={row.endTime}
                isLoading={isLoading} 
                onJoin={onJoin} />
            )
          })}
        </div>
      ) : <NoWallet />
      }
    </>
  );
};

export default Join;