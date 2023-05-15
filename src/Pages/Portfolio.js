import React from "react";
import Project from "../Components/Project";
import project2 from '../Assets/Screenshot.png'
import launchPad from "../Assets/Homepage.png"

export default function Portfolio(){
    return (
        <div>
            <div className="project-card">
                <Project link="https://sourcerers-code.herokuapp.com/" 
                src={project2} 
                alt="Sourcerers Code preview"
                title="The Sourcerer's Code" 
                technology="MERN (Mysql) Stack"/>
            </div>
            <div className="project-card">
                <Project link="https://launch-pad.herokuapp.com/" 
                src={launchPad} 
                alt="Launch-Pad Preview"
                title="Launch Pad" 
                technology="MERN Stack"/>
            </div>
        </div>
    )
}