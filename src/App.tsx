import React, { FC } from 'react';
import NavBar from './components/NavBar';
import Home from './home';
import Create from './create';
import Join from './join';
import Main from './components/Main';
import Play from './play';
import PlayGame from './play/fund';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from './Context';
import Manage from './manage';
import ManageGame from './manage/game';

export const App: FC = () => {
    return (
        <Context>
            <BrowserRouter>
                <NavBar />
                <Main childComp={
                    <Routes>
                        <Route path='/join' element={
                            <Join />
                        } />
                        <Route path='/play/:gameId' element={
                            <PlayGame />
                        } />
                        <Route path='/play' element={
                            <Play />
                        } />
                        <Route path='/create' element={
                            <Create />
                        } />
                        <Route path='/manage' element={
                            <Manage />
                        } />
                        <Route path='/manage/:gameId' element={
                            <ManageGame />
                        } />
                        <Route path='/' element={
                            <Home />
                        } />
                    </Routes>
                } />
            </BrowserRouter>
        </Context>
    );
};
