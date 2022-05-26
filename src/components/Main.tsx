import React, { FC } from 'react';
import SideBar from './SideBar';

interface MainProp {
    childComp: React.ReactNode;
}

const Main = ({ childComp }: MainProp) => {
    return (
        <div className="min-h-screen flex overflow-hidden bg-white pt-16">
            <SideBar />
            <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <div id="main-content" className="w-full flex flex-col bg-gray-50 relative overflow-y-auto lg:ml-64">
                <div className="mb-auto">
                    <main>
                        {childComp}
                    </main>
                </div>
                <p className="text-center text-sm text-gray-500 my-10">
                    &copy; 2022{' '}
                    <a href="https://openhaus.community" className="hover:underline">
                        TadeHaus
                    </a>
                    . All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Main;
