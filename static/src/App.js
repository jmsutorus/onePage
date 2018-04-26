import React, { Component } from 'react';
import {Button} from 'reactstrap';
import Popup from 'reactjs-popup';
import Post from "./Post.js";
import ReactDOM from 'react-dom';
import DisplayTemp from './weather.js'
import Clock from './Clock';
import LatLong from './LatLong.js';
import OpenWeatherAPI from './OpenWeatherAPI.js'
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			facebookUser: "StudentProblems",
			twitterUser: "reveille",
			twitterUser2: "cnnbrk",
			twitterInput: "",
			Lat:'',
		  	Long:'',
			Temp:'Loading',
			Description: '',
			Humidity: '',
			Location: 'College Station',
			weather: '',
			Wind: '8.3'
    };
	
		this.onPass = this.onPass.bind(this);		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		this.hydrateStateWithLocalStorage();

		// add event listener to save state to localStorage
		// when user leaves/refreshes the page
		window.addEventListener(
		  "beforeunload",
		  this.saveStateToLocalStorage.bind(this)
		);
	  }

	  componentWillUnmount() {
		window.removeEventListener(
		  "beforeunload",
		  this.saveStateToLocalStorage.bind(this)
		);

		// saves if component has a chance to unmount
		this.saveStateToLocalStorage();
	  }

	  hydrateStateWithLocalStorage() {
		// for all items in state
		for (let key in this.state) {
		  // if the key exists in localStorage
		  if (localStorage.hasOwnProperty(key)) {
			// get the key's value from localStorage
			let value = localStorage.getItem(key);

			// parse the localStorage string and setState
			try {
			  value = JSON.parse(value);
			  this.setState({ [key]: value });
			} catch (e) {
			  // handle empty string
			  this.setState({ [key]: value });
			}
		  }
		}
	  }

	  onPass(Lat,Long) {
		var that = this;
			OpenWeatherAPI.getTemp(Lat,Long).then(function (data) {
		  that.setState({
			Lat: Lat,
			Long: Long,
			Temp: data.main.temp,
			Name: data.name,
			Description: data.weather[0].description,
			Wind: data.wind.speed,
			Humidity: data.main.humidity,
			weather: data.weather[0].main
		  });
		},
		function (errorMessage) {
			alert(errorMessage);
		});
	  }

	  saveStateToLocalStorage() {
		// for every item in React state
		for (let key in this.state) {
		  // save to localStorage
		  localStorage.setItem(key, JSON.stringify(this.state[key]));
		}
	  }	
	
	
	 updateTitle = (e) => {
		e.preventDefault(); 
		const newTitle = this.refs['wordfield'].value;
		this.setState({ twitterUser: newTitle });
		localStorage.setItem("twitterUser", JSON.stringify(newTitle));
		this.refs['wordfield'].value = "";
	  }
	  
	 updateTitle2 = (e) => {
		e.preventDefault(); 
		const newTitle2 = this.refs['wordfield2'].value;
		this.setState({ twitterUser2: newTitle2 });
		localStorage.setItem("twitterUser2", JSON.stringify(newTitle2));
		this.refs['wordfield2'].value = "";
	  }
	  
	 updateTitle3 = (e) => {
		e.preventDefault(); 
		const newTitle3 = this.refs['wordfield3'].value;
		this.setState({ facebookUser: newTitle3 });
		localStorage.setItem("facebookUser", JSON.stringify(newTitle3));
		this.refs['wordfield3'].value = "";
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
				<div class="grid-container2">
					<div class="column">
						<Clock></Clock>
					</div>

					<div class="column">
					<center>
						<img src="/img/logo.png" className="logo"/>
						<img src="/img/theOnePage.png" className="textLogo"/><br />
						<h1 class="welcome">Good Morning, Frank Shipman.</h1>
					</center>
					</div>
					
					<div class="column">
					</div>

					<div class="column" align="right">
						<LatLong onPass = {this.onPass} />
						<DisplayTemp Temp = {this.state.Temp} Name = {this.state.Name} Description = {this.state.Description}
							 		Humidity = {this.state.Humidity} Wind = {this.state.Wind} weather = {this.state.weather}/>
					</div>
					{/*<div class="column" align="right">
						<div id="openweathermap-widget-162"></div>
					</div>
					<div class="column" align="right">
						<div id="openweathermap-widget-163"></div>
					</div>					
					<div class="column" align="right">
						<div id="openweathermap-widget-16"></div>
					</div>*/}


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
							<a href="/"><img src="img/fb_banner.png"/></a>
							
							<form onSubmit={this.updateTitle3}>
									<input ref='wordfield3' type="text4" placeholder="Search Facebook Page"/>
										{/*<button type="submit" className="login-submit"></button>*/}
								</form>	
						</div>
						<div class="row">
							<div class="fb-page" data-width="330px" data-height="471px" data-href={"https://www.facebook.com/" + this.state.facebookUser} data-tabs="timeline" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
							<blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore">
							<a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div>
						</div>
					</div>

					<div class="column"></div>

					<div class="column" >
						<div class="row">
							<a href="/"><img src="img/twitter_banner.png"/></a>
							
								<form onSubmit={this.updateTitle}>
									<input ref='wordfield' type="text2" placeholder="Search Twitter User"/>
										{/*<button type="submit" className="login-submit"></button>*/}
								</form>						
							
							
							
						</div>
						<div class="row">
							<a class="twitter-timeline" data-width="350" data-height="473" data-theme="light" href={"https://twitter.com/" + this.state.twitterUser} data-chrome="noheader nofooter noborders"></a>
						</div>
						<div>

						</div>
					</div>

					<div class="column"></div>

					<div class="column">
						<div class="row">
							<a href="/"><img src="img/cnn_banner.png"/></a>
							
							<form onSubmit={this.updateTitle2}>
									<input ref='wordfield2' type="text3" placeholder="Search Breaking News"/>
										{/*<button type="submit" className="login-submit"></button>*/}
								</form>	
						</div>
						<div class="row">
							<a class="twitter-timeline" data-width="350" data-height="473" data-theme="light" href={"https://twitter.com/" + this.state.twitterUser2} data-chrome="noheader nofooter noborders"></a>
						</div>
					</div>


				</div>
			</div>
		);
	}
}

export default App;
