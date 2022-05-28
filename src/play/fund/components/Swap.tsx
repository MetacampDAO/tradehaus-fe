import { LoadingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { CoinPrices } from '..';

interface SwapProps {
  isLoading: boolean,
  onSwap: (amount: number, sellCoin: number, buyCoin: number) => Promise<void>,
  coinPrices: CoinPrices |undefined
}
const Swap = (props: SwapProps) => {
  const [sellCoin, setSellCoin] = useState<number>(5);
  const [buyCoin, setBuyCoin] = useState<number>(5);
  const [sellAmount, setSellAmount] = useState<number>(0);

  const convertCoinIntToString = (coinInt: number) => {
    switch(coinInt) {
      case 1:
        return "BTC"
      case 2:
        return "ETH"
      case 3:
        return "LINK"
      case 4:
        return "SOL"
      case 5:
        return "USD"
    }
  }

  const getExpectedCoinAmount = () => {
    let sellCoinPrice;
    let buyCoinPrice;
    switch (sellCoin) {
      case 1:
        sellCoinPrice = props.coinPrices?.btcPrice;
        break;
      case 2:
        sellCoinPrice = props.coinPrices?.ethPrice;
        break;
      case 3:
        sellCoinPrice = props.coinPrices?.linkPrice;
        break;
      case 4:
        sellCoinPrice = props.coinPrices?.solPrice;
        break;
      case 5:
        sellCoinPrice = props.coinPrices?.usdPrice;
        break;
    }

    switch (buyCoin) {
      case 1:
        buyCoinPrice = props.coinPrices?.btcPrice;
        break;
      case 2:
        buyCoinPrice = props.coinPrices?.ethPrice;
        break;
      case 3:
        buyCoinPrice = props.coinPrices?.linkPrice;
        break;
      case 4:
        buyCoinPrice = props.coinPrices?.solPrice;
        break;
      case 5:
        buyCoinPrice = props.coinPrices?.usdPrice;
        break;
    }

    if (sellCoinPrice && buyCoinPrice)
      return (sellAmount * sellCoinPrice)/buyCoinPrice
  }

  return (
    <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10 mt-8">
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row items-center">
          <h2 className="font-semibold text-2xl mr-auto">Trade</h2>
          <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
        </div>
        <div className="mt-5">
          <div className="form">
            <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
              <div className="w-full flex flex-col mb-3">
                <label className="font-semibold text-gray-600 py-2">Sell</label>
                <select 
                  value={sellCoin}
                  onChange={(e) => setSellCoin(Number(e.target.value))} 
                  className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " name="integration[city_id]" id="integration_city_id">
                  <option value={5}>USD</option>
                  <option value={1}>BTC</option>
                  <option value={2}>ETH</option>
                  <option value={4}>SOL</option>
                  <option value={3}>LINK</option>
                </select>
              </div>
              <div className="w-full flex flex-col mb-3">
                <label className="font-semibold text-gray-600 py-2">Buy</label>
                <select 
                  value={buyCoin}
                  onChange={(e) => setBuyCoin(Number(e.target.value))} 
                  className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " name="integration[city_id]" id="integration_city_id">
                  <option value={5}>USD</option>
                  <option value={1}>BTC</option>
                  <option value={2}>ETH</option>
                  <option value={4}>SOL</option>
                  <option value={3}>LINK</option>
                </select>
              </div>
            </div>
            <div className="flex-auto w-full mb-1 text-xs space-y-2">
              <label className="font-semibold text-gray-600 py-2">Balance to Sell</label>
              <input
                type="number"
                placeholder="1"
                onChange={(e) => setSellAmount(Number(e.target.value))}
                className="border-2 rounded-lg w-full h-12 px-4" />
            </div>
            <div className="text-xs text-center">{sellAmount} {convertCoinIntToString(sellCoin)} → approx. {getExpectedCoinAmount()} {convertCoinIntToString(buyCoin)}</div>

            <button
              onClick={() => props.onSwap(sellAmount, sellCoin, buyCoin)}
              className="w-full py-3 mt-5 bg-indigo-500 rounded-md
                        font-medium text-white uppercase hover:bg-indigo-400
                        focus:outline-none hover:shadow-none">
              {props.isLoading ? <LoadingOutlined /> : "Trade"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;