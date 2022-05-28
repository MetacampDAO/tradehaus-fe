import { DollarCircleOutlined, HourglassOutlined, TrophyOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { initTradehaus } from '../../tradehaus';
import axios from 'axios';

interface PlayerRank {
  playerKey: PublicKey,
  portfolioValue: number,
}

const ManageGame = () => {
  const { gameId } = useParams();
  const wallet = useAnchorWallet();
  const [playersRank, setPlayersRank] = useState<PlayerRank[]>([]);
  const conn = new Connection("https://api.devnet.solana.com")

  useEffect(() => {
    (async () => {
      if (wallet && gameId) {
        const th = await initTradehaus(conn, wallet as any)
        const allGameAccs = await th.fetchGameFundAcc(new PublicKey(gameId));
        const pricesRes = (await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=chainlink%2Cbitcoin%2Cethereum%2Csolana%2Cbinancecoin%2Cripple&vs_currencies=USD')).data
        setPlayersRank(
          allGameAccs.map((row, index) => {
            const fund = row.account
            return {
              playerKey: row.publicKey,
              portfolioValue: Number(fund.usdQty) + Number(fund.btcQty) * pricesRes.bitcoin.usd + Number(fund.ethQty) * pricesRes.ethereum.usd + Number(fund.solQty) * pricesRes.solana.usd + Number(fund.linkQty) * pricesRes.chainlink.usd
            }
          })
        )
      }
    })();
  }, [wallet])

  return (
    <div className="mx-4 md:mx-8 ">
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Rank</th>
                  <th
                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Portfolio Value</th>
                  <th
                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {playersRank.sort(row => row.portfolioValue).reverse().map((row, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 text-2xl">
                            {index + 1}
                          </div>

                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">{row.playerKey.toBase58()}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">{row.portfolioValue}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <button
                          className={`text-sm mb-2 md:mb-0 bg-indigo-700 px-5 py-1 shadow-sm tracking-wider text-white rounded bg-indigo-600`}
                          type="button" aria-label="like">
                          Distribute
                        </button>
                      </td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageGame;