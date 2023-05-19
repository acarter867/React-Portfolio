import React from "react";
import { Link } from "react-router-dom";
import '../Assets/nav.css'

export default function Nav(){
    return(
        <div className="header-right">
            <ul>
                <li className="item">
                    <Link to="/">About Me</Link>
                </li>
                <li className="item">
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li className="item">
                    <a href="">Contact</a>
                </li>
                <li className="item">
                    <a href="">Resume</a>
                </li>
            </ul>
        </div>
    )
}