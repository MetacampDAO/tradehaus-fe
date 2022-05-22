import { Connection, PublicKey } from '@solana/web3.js';
import React, { useEffect, useState } from 'react';
import { TradehausClient } from '../../tradehaus/client';
import { initTradehaus } from '../../tradehaus/common/init';

interface GamePreview {
  hostKey: PublicKey,
  rewardMint: PublicKey,
  rewards: number,
  currentCap: number,
  maxCap:number
}
const LatestGames = () => {
  const [gamesPreview, setGamesPreview] = useState<GamePreview[]>([]);

  const conn = new Connection("https://api.devnet.solana.com")
  useEffect(() => {
    (async () => {
      const th = await initTradehaus(conn);
      const allGameAccs = await th.fetchAllGameAcc();
      setGamesPreview(
        allGameAccs.sort((row)=> Number(row.account.joinTime)).reverse().slice(0,5).map((row, index) => {
          return {
            hostKey: row.account.host,
            rewardMint: row.account.rewardMint,
            rewards: Number(row.account.rewardAmount),
            currentCap: Number(row.account.currentCap),
            maxCap: Number(row.account.maxCap)
          }
        })
      )
    })()
  }, []);

  const truncate = (str: string) => {
    return str.length > 14 ? str.substring(0, 13) + "..." : str;
  };

  return (
    <div className="grid grid-cols-1 xl:gap-4 my-5">
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2"><span className='text-3xl'>🎲 </span> Latest Games</h3>
          </div>
          <div className="flex-shrink-0">
            <a href="games" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">
              Join Games →
            </a>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Host
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Token
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                  Rewards
                </th>
                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                  Capacity
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {gamesPreview?.map((row, index) => {
                return (
                  <tr className="text-gray-500" key={index}>
                    <td className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      {truncate(row.hostKey.toBase58())}
                    </td>
                    <td className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                      {truncate(row.rewardMint.toBase58())}
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                      {row.rewards}
                    </td>
                    <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xs font-medium">{Math.round((row.currentCap/row.maxCap) * 100)}%</span>
                        <div className="relative w-full">
                          <div className="w-full bg-gray-200 rounded-sm h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-sm"
                              style={{ width: `${Math.round((row.currentCap/row.maxCap) * 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestGames;