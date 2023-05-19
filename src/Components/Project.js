import React from "react";
import "../Assets/project.css"

export default function Project(props){
    return (
        <div>
            <div className="project">
                <a href={props.link}><img src={props.src} alt={props.alt} className="project-image"/></a>                
                <div className="info">
                    <p className="project-name">{props.title}</p>
                    <p className="technology">{props.technology}</p>
                    <a className="github" href={props.github}>Visit on Github</a>
                </div>
            </div>
        </div>
  
        
        
    )
}