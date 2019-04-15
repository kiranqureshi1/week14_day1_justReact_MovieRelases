import React, {Component} from 'react';
import Comment from './Comment.js'

class CommentList extends Component{
  render(){
    const commonNodes= this.props.data.map(comment => {
      return (
        <Comment key = {comment.id} url = {comment.url}>{comment.name}</Comment>
      )
    })
    return (
      <div className="Comment-List">
      {commonNodes}
      </div>
    )

  }
}

export default CommentList;
