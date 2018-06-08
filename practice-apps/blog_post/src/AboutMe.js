import React, {Component} from 'react';

const AboutMe = props => (
  <div>
    <h3>{props.aboutMe.title}</h3>
    <p>{props.aboutMe.body}</p>
  </div>
)

export default AboutMe
