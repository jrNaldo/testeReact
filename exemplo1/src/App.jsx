import React from "react";
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Menu from "./components/Menu";
import Content from "./components/Content";

const App = props => {
    return (
        <div className="App">
            {props.children}
            <BrowserRouter>
                <Menu/>
                <Content/>
            </BrowserRouter>
        </div>
    )
}

export default App