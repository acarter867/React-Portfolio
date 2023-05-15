import React from "react";
import selfie from '../Assets/IMG_0655.png';

export default function AboutMe(){
    return(
        <div>
            <img src={selfie} alt="Picture of myself"/>
            <h1>About Me</h1>
            <p>
                My name is Alec Carter. I started my coding journey in middle shcool when I learned it was possible to make changes to the source code of a widely popular game called minecraft. 
                I spent several years coding on and off, staying fairly stagnant in my skillset. After high school, I knew software engineering was, without a doubt, the career path for me. That's when reality 
                kicked in, and I knew that if I wanted to persue a career being self taught, learning would have to become a staple in my day to day life. Fast forward 2 years, and I landed a job at a small 
                construction company as a full-stack Java developer working on a small, cross platform business management & logistics system. After several years, I realized that web development is really what 
                peaked my interest. Based on that, I started researching an efficient way to make the switch. Funny enough, a family member that went through the full-stack web development bootcamp at UNC Chapel Hill
                and spoke very highly of it. So I decided to give it a go and have not looked back or regretted anytning since.
            </p>
        </div>
    )
}