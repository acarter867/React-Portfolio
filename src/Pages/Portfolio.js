import React from "react";
import Project from "../Components/Project";
import project2 from '../Assets/Screenshot.png'
import launchPad from "../Assets/Homepage.png"
import weatherDashboard from "../Assets/Project-Preview.png"
import "../Assets/portfolio.css"

export default function Portfolio(){
    return (
        <div className="project-container flex-grid">
            <div className="project-card col">
                <Project link="https://sourcerers-code.herokuapp.com/" 
                src={project2} 
                alt="Sourcerers Code preview"
                title="The Sourcerer's Code" 
                technology="MERN (Mysql) Stack"
                github="https://github.com/acarter867/The-Sourcerer-s-Code-"/>
            </div>
            <div className="project-card col">
                <Project link="https://launch-pad.herokuapp.com/" 
                src={launchPad} 
                alt="Launch-Pad Preview"
                title="Launch Pad" 
                technology="MERN Stack"
                github="https://github.com/andykb9b13/Launch-Pad"/>
            </div>
            <div className="project-card col">
                <Project link="https://acarter867.github.io/Weather-Dashboard/" 
                src={weatherDashboard} 
                alt="Launch-Pad Preview"
                title="Launch Pad" 
                technology="HTML, CSS, Javascript"
                github="https://github.com/acarter867/Weather-Dashboard"/>
            </div>
        </div>
    )
}