import React from 'react';
import {SearchEngine} from "./components/SearchEngine/SearchEngine";
import {Route, Routes} from "react-router-dom";
import './App.scss'
import {Article} from "./components/Article/Article";

export const App = () => {
    return (
        <div className="content">
            <Routes>
                <Route path={'/'} element={<SearchEngine/>}/>
                <Route path={'/article/:id'} element={<Article/>}/>
            </Routes>
        </div>
    );
}

