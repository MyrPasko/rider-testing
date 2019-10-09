import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import requireAuth from './requireAuth';

class CommentBox extends Component {
  state = {
    comment: '',
  };


  commentChangesHandler = (e) => {
    this.setState({ comment: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  fetchHandler = (e) => {
    e.preventDefault();

    this.props.fetchComments();
  };

  render() {
    const { comment } = this.state;

    return (
      <div>
        <form
          action=""
          onSubmit={this.submitHandler}
        >
          <h4>Add a Comment</h4>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => this.commentChangesHandler(e)}
            value={comment}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <div>
          <button className="fetch-comments" onClick={this.fetchHandler}>Fetch Comments</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveComment: (comment) => dispatch(actions.saveComment(comment)),
    fetchComments: () => dispatch(actions.fetchComments()),
  }
};

export default connect(null, mapDispatchToProps)(requireAuth(CommentBox));
