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
        <div class="left">
            <Popup
              trigger={<Button bsStyle="primary">Edit</Button>}
              modal
              closeOnDocumentClick>
              <div>
                <form>
                    <input type="text" value="current link" name="link1" />
                    <input type="submit" value="update link" name="buttonLink1"/>
                    <input type="text" value="" name="image1" />
                    <input type="submit" value="upload image" name="buttonImage1"/>
                  <img src="/img/filler.svg" />
                </form>
              </div>
              <div>
                <form>
                    <input type="text" value="current link" name="link1" />
                    <input type="submit" value="update link" name="buttonLink1"/>
                    <input type="text" value="" name="image1" />
                    <input type="submit" value="upload image" name="buttonImage1"/>
                  <img src="/img/filler.svg" />
                </form>
              </div>
              <div>
                <form>
                    <input type="text" value="current link" name="link1" />
                    <input type="submit" value="update link" name="buttonLink1"/>
                    <input type="text" value="" name="image1" />
                    <input type="submit" value="upload image" name="buttonImage1"/>
                  <img src="/img/filler.svg" />
                </form>
              </div>
              <div>
                <form>
                    <input type="text" value="current link" name="link1" />
                    <input type="submit" value="update link" name="buttonLink1"/>
                    <input type="text" value="" name="image1" />
                    <input type="submit" value="upload image" name="buttonImage1"/>
                  <img src="/img/filler.svg" />
                </form>
              </div>
              <div>
                <form>
                    <input type="text" value="current link" name="link1" />
                    <input type="submit" value="update link" name="buttonLink1"/>
                    <input type="text" value="" name="image1" />
                    <input type="submit" value="upload image" name="buttonImage1"/>
                  <img src="/img/filler.svg" />
                </form>
              </div>
              <div>
                <form>
                    <input type="text" value="current link" name="link1" />
                    <input type="submit" value="update link" name="buttonLink1"/>
                    <input type="text" value="" name="image1" />
                    <input type="submit" value="upload image" name="buttonImage1"/>
                  <img src="/img/filler.svg" />
                </form>
              </div>
              <div>
                <form>
                    <input type="text" value="current link" name="link1" />
                    <input type="submit" value="update link" name="buttonLink1"/>
                    <input type="text" value="" name="image1" />
                    <input type="submit" value="upload image" name="buttonImage1"/>
                  <img src="/img/filler.svg" />
                </form>
              </div>
              <div>
                <form>
                    <input type="text" value="current link" name="link1" />
                    <input type="submit" value="update link" name="buttonLink1"/>
                    <input type="text" value="" name="image1" />
                    <input type="submit" value="upload image" name="buttonImage1"/>
                  <img src="/img/filler.svg" />
                </form>
              </div>
            </Popup>
            <div class="circleLinks">
              <img src="/img/filler.svg" />
              <img src="/img/filler.svg" />
              <img src="/img/filler.svg" />
              <img src="/img/filler.svg" />
            </div>
            <div class="circleLinks">
              <img src="/img/filler.svg" />
              <img src="/img/filler.svg" />
              <img src="/img/filler.svg" />
              <img src="/img/filler.svg" />
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
