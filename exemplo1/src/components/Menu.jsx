import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

const Menu = props => {
    return(
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu