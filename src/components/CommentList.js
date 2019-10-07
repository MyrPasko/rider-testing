import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {

  renderComments = () => {
    const { comments } = this.props;

    return (comments && comments.map((comment, index) => {
      return (
        <li key={index}>
          <p>{comment}</p>
        </li>
      )
    }));
  };

  render() {


    return (
      <ul>
        {this.renderComments()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    comments: state.comments.comments,
  };
};

export default connect(
  mapStateToProps, null,
)(CommentList);
