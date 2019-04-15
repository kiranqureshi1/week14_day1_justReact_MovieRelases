import React, {Component} from 'react';

class Comment extends Component{
  render(){
    return (
      <div className="comment">
      <h4>
      <a href= {this.props.url}>{this.props.children}</a>
      </h4>
      </div>
    )
  }
}

export default Comment;
