import React, { Component } from 'react';
import "./Post.css"

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header,
      body: props.body,
      picture: props.picture
    };
  }

  render() {
    return (
      <div className="post-container">
        <div className="post-header">
          {this.state.header}
        </div>
        <div className="post-body">
          <div className="post-text">
            {this.state.body}
          </div>
        </div>
        <div className="post-picture">
          <img src={this.state.picture}></img>
        </div>
      </div>
    );
  }
}

export default Post;
