import React from 'react';
import { LoadingOutlined } from "@ant-design/icons";

interface FillRewardProps {
  rewardMint: string,
  setRewardMint: React.Dispatch<React.SetStateAction<string>>,
  rewardAmount: number,
  setRewardAmount: React.Dispatch<React.SetStateAction<number>>,
  setConfigFilled: React.Dispatch<React.SetStateAction<boolean>>,
  isLoading: boolean,
  onCreate: () => Promise<void>,
}

const FillReward = (props: FillRewardProps) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-bold text-2xl text-gray-700 w-5/6 text-center">Set Game Rewards</h1>
      </div>
      <p className="font-semibold text-base text-gray-700 text-left mt-2">Mint of Token</p>
      <input
        type="text"
        placeholder=""
        onChange={(e) => props.setRewardMint(e.target.value)}
        className="border-2 rounded-lg w-full h-12 px-4" />

      <p className="font-semibold text-base text-gray-700 text-left mt-2">Amount of Token Rewards</p>
      <input
        type="number"
        placeholder="1000"
        onChange={(e) => props.setRewardAmount(Number(e.target.value))}
        className="border-2 rounded-lg w-full h-12 px-4" />

      <div className='grid grid-cols-2'>

        <button
          onClick={() => props.setConfigFilled(false)}
          className="w-11/12 py-3 mt-5 bg-gray-400 rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
          Back
        </button>

        <button
          onClick={props.onCreate}
          className={`w-11/12 ${props.isLoading?"py-0": "py-3"} mt-5 bg-green-600 rounded-md
                font-medium text-white uppercase
                focus:outline-none hover:shadow-none`}>
          {props.isLoading? (
            <LoadingOutlined className='text-2xl'/>
          ) : (
            'Create'
          )}
        </button>
      </div>

    </>
  );
};

export default FillReward;