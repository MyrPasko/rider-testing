import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class App extends Component {

  renderButton = () => {
    const { isAuthenticated, changeAuth } = this.props;

    return (
      <React.Fragment>
        {isAuthenticated ?
          <button onClick={() => changeAuth(false)}>Sign Out</button> :
          <button onClick={() => changeAuth(true)}>Sign In</button>}
      </React.Fragment>
    )
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? 'You are inside' : 'You are out of app'}
        {this.renderHeader()}
        <Route path="/post" component={CommentBox}/>
        <Route path="/" exact component={CommentList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAuth: (isLoggedIn) => dispatch(actions.changeAuth(isLoggedIn)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
