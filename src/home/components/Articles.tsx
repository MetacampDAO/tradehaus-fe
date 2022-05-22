import React from 'react';

const Articles = () => {

  return (
    <div className="mt-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-lg">
        <a>
          <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070" alt="" />
        </a>
        <div className="p-5">
          <a>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Cryptocurrency Trading Basics
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">
            Trading can be very speculative, and knowing what trading tools are available and how to use them might help trader/investors make better and less risky decisions.
          </p>
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href="https://medium.com/coinmonks/ultimate-crypto-trading-guide-for-beginners-trading-101-6bd901cf8558"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg">
        <a>
          <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1620266757065-5814239881fd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072" alt="" />
        </a>
        <div className="p-5">
          <a>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Crypto Trading Strategies
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">
            If you’re one of does who uses the infamous “Buy High — Sell Low” Strategy, or just an average joe who just wanna learn. Well this post is for you!
          </p>
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href="https://medium.com/coinmonks/ultimate-crypto-trading-guide-for-beginners-trading-strategy-e666a3602c4b"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg">
        <a>
          <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070" alt="" />
        </a>
        <div className="p-5">
          <a>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Technical Analysis
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">
            This article will explain TA while also digging into trading indicators before concluding with the best indicators for you.
          </p>
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href="#"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;