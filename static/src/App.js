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
					<img src="/img/logo.png" className="logo"/>
					<img src="/img/theOnePage.png" />
					
					<iframe src="http://free.timeanddate.com/clock/i6785m90/n2284/th2" frameborder="0" width="114" height="18"></iframe>
					
					{/*<div className="social-button-container">
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
							<a href="https://www.twitch.tv/" target="_blank"><img src="/img/twitch_logo.png"/></a>
							<a href="https://www.youtube.com" target="_blank"><img src="/img/youtube_logo.png"/></a>
							<a href="https://www.instagram.com" target="_blank"><img src="/img/ig_logo.png"/></a>
						</div>
						
						<div class="searchBar">
							<form action="http://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
								<input autocomplete="on" class="form-controls search" name="q" placeholder="Google Search" required="required"  type="text"></input>
							</form>
						</div>
					</div>
					
					<div class="column">
						<div class="fb-page" data-width="350px" data-height="500px" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
					</div>
					
					<div class="column">
						<a class="twitter-timeline" data-width="350" data-height="500" data-theme="light" href="https://twitter.com/TwitterDev" data-chrome="nofooter"></a> 
					</div>
					
					<div class="column">
						<a class="twitter-timeline" data-width="350" data-height="500" data-theme="light" href="https://twitter.com/cnnbrk" data-chrome="nofooter"></a> 
					</div>
					
					
				</div>
			</div>
		);
	}
}

export default App;
