import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "Phish is the best, overall",
  authors: [
    "Wookerson",
    "Gordo",
    "Floyd the Weasel"
  ]
  body: "Don't even try to say they're not. You'd be wrong.",
  comments: [
    "Heads",
    "Chomp-on, chomper",
    "Tiiiiight post brah - couldn't agree more."
  ]
}

ReactDOM.render(<
  Post
  title={post.title}
  author={post.author}
  body={post.body}
  comments={post.comments}
  />, document.getElementById('root'));
registerServiceWorker();
