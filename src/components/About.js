import React from "react"
const bio = true

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default About;
