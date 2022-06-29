import React from "react";
import Links from "./Links";


// {/* write an <About> component here */}

function About(props) {
    return(
      <div id="about">
        <h2>About Me</h2>
        {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links 
            github = { Links.github }
            linkedin = { Links.linkedin }
        />
      </div>
    );
  }

export default About