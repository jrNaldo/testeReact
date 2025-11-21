import React from "react";
import './Content.css'
import {Route, Routes } from "react-router-dom";
import Home from "../layout/Home";

const Content = props => {
    return (
        <main className="Content">
            <Routes>
                <Route path='/' element={<Home/>}>Inicio</Route>
            </Routes>
        </main>
    )
}

export default Content