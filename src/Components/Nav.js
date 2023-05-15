import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <ul>
                <li class="item">
                    <a href="#about-me">About Me</a>
                </li>
                <li class="item">
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li class="item">
                    <a href="">Contact</a>
                </li>
                <li class="item">
                    <a href="">Resume</a>
                </li>
            </ul>
        </div>
    )
}