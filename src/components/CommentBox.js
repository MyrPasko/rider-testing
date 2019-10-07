import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

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

  render() {
    const { comment } = this.state;

    return (
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
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveComment: (comment) => dispatch(actions.saveComment(comment)),
  }
};

export default connect(null, mapDispatchToProps)(CommentBox);
