import React, { FC, useState } from 'react';
import Acquisition from '../Components/Acquisition';
import Footer from '../Components/Footer';
import LatestCustomer from '../Components/LatestCustomer';
import LatestTransaction from '../Components/LatestTransaction';
import MainChart from '../Components/MainChart';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import SummaryStats from '../Components/SummaryStats';

const Content: FC = () => {
    return (
        <div>
            <NavBar />
            <div className="flex overflow-hidden bg-white pt-16">
                <SideBar />
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <main>
                        <div className="pt-6 px-4">
                            <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                                <MainChart />
                                <LatestTransaction />
                            </div>
                            <SummaryStats />
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                                <LatestCustomer />
                                <Acquisition />
                            </div>
                        </div>
                    </main>
                    <Footer />
                    <p className="text-center text-sm text-gray-500 my-10">
                        &copy; 2019-2021{' '}
                        <a href="https://openhaus.community" className="hover:underline">
                            TadeHaus
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
            <script async defer src="https://buttons.github.io/buttons.js"></script>
            <script src="/app.bundle.js"></script>
        </div>
    );
};

export default Content;
