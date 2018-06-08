import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const blogPost = {
  title: "Phish is the best, overall",
  authors: [
    "Wookerson",
    "Gordo",
    "Floyd the Weasel"
  ],
  body: "Don't even try to say they're not. You'd be wrong.",
  comments: [
    "Heads",
    "Chomp-on, chomper",
    "Tiiiiight blogPost brah - couldn't agree more."
  ]
}

const aboutMe = {
  title: "About Me - Wookerson",
  body: "Find me on lot, selling my wares.\nChomper anthems all night inside the show..."
}

const theBestShow = {
  title: "The Best Show",
  body: "Silly question, every Phish show ever."
}

const favouriteFood = {
  title: "My Favourite Food",
  body: "Lot Burritos after the show - Mall Dawgs before."
}

ReactDOM.render(<
  App
  blogPost={blogPost}
  aboutMe={aboutMe}
  theBestShow={theBestShow}
  favouriteFood={favouriteFood}
/>, document.getElementById('root'));
registerServiceWorker();
