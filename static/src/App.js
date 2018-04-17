import React, { Component } from 'react';
import {Button} from 'reactstrap';
import Popup from 'reactjs-popup';
import Post from "./Post.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div class="header">
        <h1><img src="/img/logo.png" /> The OnePage</h1>
        <div className="social-button-container">
          <button className="social-button social-button-facebook">
            Facebook
          </button>
          <button className="social-button social-button-twitter">
            Twitter
          </button>
          <button className="social-button social-button-instagram">
            Instagram
          </button>
        </div>
      </div>
      <div class="grid-container">
        <div class="left" id="scroll">
            <div class="circleLinks1">
              <a href="https://www.facebook.com" target="_blank"><img src="/img/fb_logo.png"/></a>
              <a href="https://www.linkedin.com" target="_blank"><img src="/img/linkedin_logo.png"/></a>
              <a href="https://www.twitter.com" target="_blank"><img src="/img/twitter_logo.png"/></a>
              <a href="https://www.pinterest.com" target="_blank"><img src="/img/pinterest_logo.png"/></a>
            </div>
            <div class="circleLinks2">
              <a href="https://www.reddit.com" target="_blank"><img src="/img/reddit_logo.png"/></a>
              <a href="https://www.twitch.tv/" target="_blank"><img src="/img/twitch_logo.png"/></a>
              <a href="https://www.youtube.com" target="_blank"><img src="/img/youtube_logo.png"/></a>
              <a href="https://www.instagram.com" target="_blank"><img src="/img/ig_logo.png"/></a>
            </div>
        </div>
        <div class="middle" id="scroll">
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "} picture={"http://chenglou.github.io/react/img/logo.svg"}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "} picture={"http://chenglou.github.io/react/img/logo.svg"}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}/>
        </div>
        <div class="right" id="scroll">
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "} picture={"http://chenglou.github.io/react/img/logo.svg"}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "} picture={"http://chenglou.github.io/react/img/logo.svg"}/>
          <Post header={"Hello World"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
