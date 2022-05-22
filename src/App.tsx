import React, { FC } from 'react';
import NavBar from './components/NavBar';
import Home from './home';
import Create from './create';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from './Context';

export const App: FC = () => {
    return (
        <Context>
            <NavBar />
            <Main childComp={
                <BrowserRouter>
                    <Routes>
                        <Route path='/create' element ={
                            <Create />
                        }/>
                        <Route path='/' element ={
                            <Home />
                        }/>
                    </Routes>
                </BrowserRouter>
            }/>
        </Context>
    );
};
