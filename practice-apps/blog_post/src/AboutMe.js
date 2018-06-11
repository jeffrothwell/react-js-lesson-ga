import React, {Component} from 'react';

const AboutMe = props => (
  <div>
    <h3>{props.aboutMe.title}</h3>
    <img src="http://i0.kym-cdn.com/entries/icons/mobile/000/002/149/wook-_17.jpg" alt="Wookerson picture" width="250px"/>
    <p>{props.aboutMe.body}</p>
  </div>
)

export default AboutMe
