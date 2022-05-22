import React, { useEffect } from 'react';

interface FillConfigsProps {
  maxPlayers: number,
  setMaxPlayers: React.Dispatch<React.SetStateAction<number>>,
  startUsd: number,
  setStartUsd: React.Dispatch<React.SetStateAction<number>>,
  noWinners: number,
  setNoWinners: React.Dispatch<React.SetStateAction<number>>,
  setConfigFilled: React.Dispatch<React.SetStateAction<boolean>>,
  setDateFilled: React.Dispatch<React.SetStateAction<boolean>>,
}

const FillConfigs = (props: FillConfigsProps) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">Set Game Configs</h1>
      </div>
      <p className="font-semibold text-base text-gray-700 text-left mt-2">Max Number of Players</p>
      <input
        type="number"
        placeholder="10"
        onChange={(e) => props.setMaxPlayers(Number(e.target.value))}
        className="border-2 rounded-lg w-full h-12 px-4" />

      <p className="font-semibold text-base text-gray-700 text-left mt-2">Number of Winners</p>
      <input
        type="number"
        placeholder="1"
        onChange={(e) => props.setNoWinners(Number(e.target.value))}
        className="border-2 rounded-lg w-full h-12 px-4" />

      <p className="font-semibold text-base text-gray-700 text-left mt-2">Initial Capital (USD)</p>
      <input
        type="number"
        placeholder="100000"
        onChange={(e) => props.setStartUsd(Number(e.target.value))}
        className="border-2 rounded-lg w-full h-12 px-4" />
      <div className='grid grid-cols-2'>

        <button
          onClick={() => props.setDateFilled(false)}
          className="w-11/12 py-3 mt-5 bg-gray-400 rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
          Back
        </button>

        <button
          onClick={() => props.setConfigFilled(true)}
          className="w-11/12 py-3 mt-5 bg-indigo-500 rounded-md
                font-medium text-white uppercase
                focus:outline-none hover:shadow-none">
          Next
        </button>
      </div>

    </>
  );
};

export default FillConfigs;