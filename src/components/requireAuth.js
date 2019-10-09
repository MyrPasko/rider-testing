import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {

    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate(prevProps, prevState) {
      this.shouldNavigateAway();
    }

    shouldNavigateAway = () => {
      const { isAuthenticated, history } = this.props;

      if (!isAuthenticated) {
        history.push('/');
      }
    };

    render() {
      return <ChildComponent {...this.props}/>
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  };

  return connect(mapStateToProps)(ComposedComponent);
}
