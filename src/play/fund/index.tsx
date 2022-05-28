import { DollarCircleOutlined, HourglassOutlined, TrophyOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import Fund from './components/Fund';
import Swap from './components/Swap';
import { useParams } from 'react-router-dom';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { initTradehaus } from '../../tradehaus';
import axios from 'axios';

export interface FundBalances {
  usdBalance: number,
  btcBalance: number,
  ethBalance: number,
  solBalance: number,
  linkBalance: number
}

export interface FundValues {
  usdValue: number,
  btcValue: number,
  ethValue: number,
  solValue: number,
  linkValue: number
}

export interface CoinPrices {
  usdPrice: number,
  btcPrice: number,
  ethPrice: number,
  solPrice: number,
  linkPrice: number
}

const PlayGame = () => {
  const { gameId } = useParams();
  const wallet = useAnchorWallet();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [coinPrices, setCoinPrices] = useState<CoinPrices>({});
  const [portfolioValue, setPortfolioValue] = useState<number>();
  const [hoursLeft, setHoursLeft] = useState<number>();
  const [maxCap, setMaxCap] = useState<number>();
  const [fundBalances, setFundBalances] = useState<FundBalances>();
  const [fundValues, setFundValues] = useState<FundValues>();
  const conn = new Connection("https://api.devnet.solana.com")

  const onSwap = async (
    amount: number,
    sellCoin: number,
    buyCoin: number) => {
    if (wallet && gameId) {
      setIsLoading(true)
      try {
        const th = await initTradehaus(conn, wallet as any);
        const {txSig} = await th.swapPlayerItems(
          new PublicKey(gameId),
          amount,
          sellCoin,
          buyCoin
        )
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    (async () => {
      if (wallet && gameId) {
        const th = await initTradehaus(conn, wallet as any);
        const game = await th.fetchGameAcc(new PublicKey(gameId));
        console.log("hi")
        console.log(game)
        setHoursLeft(Math.ceil((Number(game.endTime) - Date.now() / 1000) / 3600))
        setMaxCap(Number(game.maxCap))

        const fund = await th.fetchPlayerFundAcc(new PublicKey(gameId));
        setFundBalances(
          {
            usdBalance: Number(fund.usdQty),
            btcBalance: Number(fund.btcQty),
            ethBalance: Number(fund.ethQty),
            solBalance: Number(fund.solQty),
            linkBalance: Number(fund.linkQty)
          }
        )
        const pricesRes = (await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=chainlink%2Cbitcoin%2Cethereum%2Csolana%2Cbinancecoin%2Cripple&vs_currencies=USD')).data
        setFundValues(
          {
            usdValue: Number(fund.usdQty),
            btcValue: Number(fund.btcQty) * pricesRes.bitcoin.usd,
            ethValue: Number(fund.ethQty) * pricesRes.ethereum.usd,
            solValue: Number(fund.solQty) * pricesRes.solana.usd,
            linkValue: Number(fund.linkQty) * pricesRes.chainlink.usd
          }
        )
        setPortfolioValue(
          Number(fund.usdQty) + Number(fund.btcQty) * pricesRes.bitcoin.usd + Number(fund.ethQty) * pricesRes.ethereum.usd + Number(fund.solQty) * pricesRes.solana.usd + Number(fund.linkQty) * pricesRes.chainlink.usd
        )
        setCoinPrices(
          {
            usdPrice: 1,
            btcPrice: pricesRes.bitcoin.usd,
            ethPrice: pricesRes.ethereum.usd,
            solPrice: pricesRes.solana.usd,
            linkPrice: pricesRes.chainlink.usd
          }
        )
      }
    })();
  }, [])

  return (
    <div className="mx-4 md:mx-8 ">
      <div className="mt-8">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
              <DollarCircleOutlined className='text-5xl text-orange-300' />
              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">${portfolioValue}</h4>
                <div className="text-gray-500">Portfolio Value</div>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
              <TrophyOutlined className='text-5xl text-green-600' />
              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">1 <span className='text-sm'> out of {maxCap}</span></h4>
                <div className="text-gray-500">Current Rank</div>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
              <HourglassOutlined className='text-5xl text-blue-500' />
              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">{hoursLeft}</h4>
                <div className="text-gray-500">Hours Left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className='col-span-7'>
          <Fund
            fundBalances={fundBalances}
            fundValues={fundValues} />
        </div>
        <div className='col-span-5'>
          <Swap 
            isLoading={isLoading}
            onSwap={onSwap}
            coinPrices={coinPrices}/>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;