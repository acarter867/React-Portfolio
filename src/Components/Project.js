import React from "react";

export default function Project(props){
    return (
        <div>
            <div className="project">
                <a href={props.link}><img src={props.src} alt={props.alt} className="project-image"/></a>
                <div class="info">
                    <p class="project-name">{props.title}</p>
                    <p class="technology">{props.technology}</p>
                </div>
            </div>
        </div>
  
        
        
    )
}