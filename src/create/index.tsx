import { useAnchorWallet } from '@solana/wallet-adapter-react';
import React, { useState } from 'react';
import NoWallet from '../components/NoWallet';
import "react-datepicker/dist/react-datepicker.css";
import SelectDate from './components/SelectDates';
import FillConfigs from './components/FillConfigs';
import FillReward from './components/FillReward';
import { createGameFe, initTradehaus } from '../tradehaus';
import { PublicKey } from '@solana/web3.js';
import { Connection } from '@metaplex/js';

const Create = () => {
  const wallet = useAnchorWallet();
  const [dateFilled, setDateFilled] = useState(false);
  const [configFilled, setConfigFilled] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(new Date().setDate(new Date().getDate() + 30)));
  const [maxPlayers, setMaxPlayers] = useState<number>(10);
  const [startUsd, setStartUsd] = useState<number>(100000);
  const [noWinners, setNoWinners] = useState<number>(1);
  const [rewardMint, setRewardMint] = useState<string>("");
  const [rewardAmount, setRewardAmount] = useState<number>(1000);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onCreate = async () => {
    if (wallet && wallet.publicKey) {
      try {
        setIsLoading(true)
        const conn = new Connection("https://api.devnet.solana.com")
        const th = await initTradehaus(conn, wallet as any);
        const {txSig} = await createGameFe(
          wallet.publicKey,
          new PublicKey(rewardMint),
          Date.now(),
          startDate.getTime(),
          endDate.getTime(),
          startUsd,
          noWinners,
          maxPlayers,
          rewardAmount,
          th
        );
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
        <div className="flex items-center justify-center bg-gray-50" style={{ height: "80vh" }} >
          <div className="bg-white rounded-lg shadow-lg p-10 w-1/3">
            {!dateFilled && 
              <SelectDate
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate} 
                setDateFilled={setDateFilled}/>
            }
            {dateFilled && !configFilled &&
              <FillConfigs
                maxPlayers={maxPlayers}
                setMaxPlayers={setMaxPlayers}
                startUsd={startUsd}
                setStartUsd={setStartUsd}
                noWinners={noWinners}
                setNoWinners={setNoWinners}
                setConfigFilled={setConfigFilled}
                setDateFilled={setDateFilled}/>
            }
            {dateFilled && configFilled && 
              <FillReward
                rewardMint={rewardMint}
                setRewardMint={setRewardMint}
                rewardAmount={rewardAmount}
                setRewardAmount={setRewardAmount}
                setConfigFilled={setConfigFilled}
                isLoading={isLoading}
                onCreate={onCreate}/>

            }
          </div>
        </div >
      ) : <NoWallet />
      }
    </>
  );
};

export default Create;

