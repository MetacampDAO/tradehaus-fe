import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CoinPrices {
  chainlinkPrice: number,
  chainlinkChange: number,
  bitcoinPrice: number,
  bitcoinChange: number,
  ethereumPrice: number,
  ethereumChange: number,
  solanaPrice: number,
  solanaChange: number,
  binancePrice: number,
  binanceChange: number,
  ripplePrice: number,
  rippleChange: number,
}

const Prices = () => {
  const [coinPrices, setCoinPrices] = useState<CoinPrices>();

  useEffect(() => {
    (async () => {
      const pricesRes = (await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=chainlink%2Cbitcoin%2Cethereum%2Csolana%2Cbinancecoin%2Cripple&vs_currencies=USD&include_24hr_change=true')).data
      setCoinPrices(
        {
          chainlinkPrice: pricesRes.chainlink.usd,
          chainlinkChange: pricesRes.chainlink.usd_24h_change,
          bitcoinPrice: pricesRes.bitcoin.usd,
          bitcoinChange: pricesRes.bitcoin.usd_24h_change,
          ethereumPrice: pricesRes.ethereum.usd,
          ethereumChange: pricesRes.ethereum.usd_24h_change,
          solanaPrice: pricesRes.solana.usd,
          solanaChange: pricesRes.solana.usd_24h_change,
          binancePrice: pricesRes.binancecoin.usd,
          binanceChange: pricesRes.binancecoin.usd_24h_change,
          ripplePrice: pricesRes.ripple.usd,
          rippleChange: pricesRes.ripple.usd_24h_change,
        }
      )
    })();
  }, [])

  const priceChangeComp = (priceChange: number | undefined) => {
    return priceChange ? (
      <div className={`ml-5 w-0 flex items-center justify-end 
        flex-1 ${priceChange > 0 ? "text-green-500" : "text-red-500"} text-base font-bold`}>
        {Math.round(priceChange * 10) / 10}%
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d={priceChange > 0 ? 
                "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              :
                "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
            }
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    ) : (
      <> - </>
    );
  }

  return (
    <div className="mt-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">${coinPrices?.chainlinkPrice}</span>
            <h3 className="text-base font-normal text-gray-500">Chainlink <a className="text-xs text-gray-700 font-bold">LINK</a></h3>
          </div>
          {priceChangeComp(coinPrices?.chainlinkChange)}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">${coinPrices?.bitcoinPrice}</span>
            <h3 className="text-base font-normal text-gray-500">Bitcoin <a className="text-xs text-gray-700 font-bold">BTC</a></h3>
          </div>
          {priceChangeComp(coinPrices?.bitcoinChange)}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">${coinPrices?.ethereumPrice}</span>
            <h3 className="text-base font-normal text-gray-500">Ethereum <a className="text-xs text-gray-700 font-bold">ETH</a></h3>
          </div>
          {priceChangeComp(coinPrices?.ethereumChange)}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">${coinPrices?.solanaPrice}</span>
            <h3 className="text-base font-normal text-gray-500">Solana <a className="text-xs text-gray-700 font-bold">SOL</a></h3>
          </div>
          {priceChangeComp(coinPrices?.solanaChange)}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">${coinPrices?.binancePrice}</span>
            <h3 className="text-base font-normal text-gray-500">Binance <a className="text-xs text-gray-700 font-bold">BNB</a></h3>
          </div>
          {priceChangeComp(coinPrices?.binanceChange)}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">${coinPrices?.ripplePrice}</span>
            <h3 className="text-base font-normal text-gray-500">Ripple <a className="text-xs text-gray-700 font-bold">XRP</a></h3>
          </div>
          {priceChangeComp(coinPrices?.rippleChange)}
        </div>
      </div>
    </div>
  );
};

export default Prices;