import React, { useState } from 'react';
import { UserOutlined, DollarOutlined, CalendarOutlined, LoadingOutlined } from '@ant-design/icons';
import { GameManage } from '..';
import { PublicKey } from '@solana/web3.js';
import { Link } from 'react-router-dom';

const GameManage = (props: GameManage) => {

  const utcStart = new Date(props.startTime * 1000)
  const utcEnd = new Date(props.endTime * 1000)
  const timeNow = Date.now() / 1000

  const truncate = (str: string) => {
    return str.length > 14 ? str.substring(0, 13) + "..." : str;
  };


  return (
    <div className="flex flex-col">
      <div className="bg-white shadow-md  rounded-3xl p-4">
        <div className="flex-none lg:flex">
          <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
            <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                Public
              </div>
              <h2 className="flex-auto text-lg font-medium">Game Name</h2>
            </div>
            <p className="mt-6"></p>
            <div className="flex text-sm text-gray-500">
              <div className="flex-1 inline-flex items-center">
                <CalendarOutlined className="mb-1 mr-2 text-lg text-blue-700" />
                <p className="">
                  {utcStart.getHours()}:{utcStart.getSeconds()} {utcStart.getDate()}/{utcStart.getMonth()} to {` `}
                  {utcEnd.getHours()}:{utcEnd.getSeconds()} {utcEnd.getDate()}/{utcEnd.getMonth()}</p>
              </div>
            </div>
            <div className="flex text-sm text-gray-500">
              <div className="flex-1 inline-flex items-center">
                <UserOutlined className="mb-1 mr-2 text-lg text-blue-700" />
                <p className="">{truncate(props.hostKey.toBase58())}</p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <DollarOutlined className="mb-1 mr-2 text-lg text-blue-700" />
                <p className="">{truncate(props.rewardMint.toBase58())}</p>
              </div>
            </div>
            <div className="flex px-4 py-1"></div>
            <div className="flex space-x-3 text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <div
                  className="mb-2 md:mb-0 bg-white px-4 py-1 shadow-sm border text-gray-600 rounded-full inline-flex items-center space-x-2 ">
                  <span className="text-xl">🎁</span><span> {props.rewards} Tokens</span>
                </div>
              </div>
              <Link to={`/manage/${props.gameKey}`} className="flex">
                <button
                  className={`mb-2 md:mb-0 bg-indigo-700 px-5 py-1 shadow-sm tracking-wider text-white rounded-full bg-indigo-600`}
                  type="button" aria-label="like">
                  Manage Game
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameManage;