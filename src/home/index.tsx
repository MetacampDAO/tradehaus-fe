import React from 'react';
import Prices from './components/Prices';
import LatestGames from './components/LatestGames';
import Articles from './components/Articles';

const Home = () => {
  return (
    <div className="pt-6 px-4">
      <Prices />
      <LatestGames />
      <Articles />
    </div>
  );
};

export default Home;
