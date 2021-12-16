import React from 'react';
import {Main} from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import './App.scss'
import {Article} from "./components/Article/Article";

export const App = () => {
    return (
        <div className="content">
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/article/:id'} element={<Article/>}/>
            </Routes>
        </div>
    );
}

