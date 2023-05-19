import React from "react";
import Nav from "./Nav";
import '../Assets/nav.css'

export default function Header(){
    return (
        <div className="header-left">
            <div className="title">
                Alec Carter
            </div>
            <Nav />
        </div>
    )
}