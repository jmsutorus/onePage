import React, { Component } from 'react';
import {Button} from 'reactstrap';
import Popup from 'reactjs-popup';
import Post from "./Post.js";
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      facebookUser: "StudentProblems",
			twitterUser: "reveille",
			twitterInput: "",
    };
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
		this.setState({
      twitterUser: this.state.twitterInput,
    });
  }
	render() {
		return (
			<div>
				<div class="header">
					<div class="weathercont">
							<LatLong onPass = {this.onPass} />
							<DisplayTemp Temp = {this.state.Temp} Name = {this.state.Name} Description = {this.state.Description}
							 Humidity = {this.state.Humidity} Wind = {this.state.Wind}/>
					</div>
					<div class="logocont">
						<img src="/img/logo.png" className="logo"/>
						<img src="/img/theOnePage.png" className="textLogo"/>
					</div>
					<div class="clockcont">
						<Clock></Clock>
					</div>
					*/}
				</div>

				<div class="grid-container">
					<div class="column">
						<div class="circleLinks1">
							<a href="https://www.facebook.com" target="_blank"><img src="/img/fb_logo.png"/></a>
							<a href="https://www.linkedin.com" target="_blank"><img src="/img/linkedin_logo.png"/></a>
							<a href="https://www.twitter.com" target="_blank"><img src="/img/twitter_logo.png"/></a>
							<a href="https://www.pinterest.com" target="_blank"><img src="/img/pinterest_logo.png"/></a>
						</div>

						<div class="circleLinks2">
							<a href="https://www.reddit.com" target="_blank"><img src="/img/reddit_logo.png"/></a>
							<a href="https://www.twitch.tv" target="_blank"><img src="/img/twitch_logo.png"/></a>
							<a href="https://www.youtube.com" target="_blank"><img src="/img/youtube_logo.png"/></a>
							<a href="https://www.instagram.com" target="_blank"><img src="/img/ig_logo.png"/></a>
						</div>

						<div class="circleLinks3">
							<a href="https://howdy.tamu.edu" target="_blank"><img src="/img/howdy_logo.png"/></a>
							<a href="https://ecampus.tamu.edu" target="_blank"><img src="/img/ecampus_logo.png"/></a>
							<a href="https://www.amazon.com" target="_blank"><img src="/img/amazon_logo.png"/></a>
							<a href="https://www.netflix.com" target="_blank"><img src="/img/netflix_logo.png"/></a>
						</div>

						<div class="searchBar">
							<form action="http://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
								<input autocomplete="on" title="Google Search" class="form-controls search" name="q" required="required"  type="text"></input>
							</form>
						</div>
					</div>

					<div class="column"></div>

					<div class="column">
						<div class="row">
							<img src="img/fb_banner.png"/>
						</div>
						<div class="row">
							<div class="fb-page" data-width="330px" data-height="500px" data-href="https://www.facebook.com/StudentProblems/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
						</div>
					</div>

					<div class="column"></div>

					<div class="column" >
						<div class="row">
							<img src="img/twitter_banner.png"/>
						</div>
						<div class="row">
							<a class="twitter-timeline" data-width="350" data-height="500" data-theme="light" href={"https://twitter.com/"+this.state.twitterUser} data-chrome="noheader nofooter noborders"></a>
						</div>
						<div>
							<form onSubmit={this.handleSubmit} className="login-form">
								<input
				          value={this.state.password}
				          onChange={this.handleChange}
				          type="" className="login-input"
				          placeholder="twitter user" name="twitterInput"
				        />
								<button type="submit" className="login-submit">
				        </button>
							</form>
						</div>
					</div>

					<div class="column"></div>

					<div class="column">
						<div class="row">
							<img src="img/cnn_banner.png"/>
						</div>
						<div class="row">
							<a class="twitter-timeline" data-width="350" data-height="500" data-theme="light" href="https://twitter.com/cnnbrk" data-chrome="noheader nofooter noborders"></a>
						</div>
					</div>


				</div>
			</div>
		);
	}
}

export default App;
