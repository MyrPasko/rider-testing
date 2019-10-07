import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {                                                      // for refactor, this function executes before each test.-
  wrapped = shallow(<App />);
});

it('should shows a Comment Box inside of the App', function () {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('should shows a Comment List inside of the App', function () {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// it('should shows a Comment Box inside of App', function () {
//   const div = document.createElement('div');                  // fake div creating inside of JSDOM
//
//   ReactDOM.render(<App/>, div);                        // render it
//   //Looks inside the div
//   // And checks to see if the CommentBox is in there
//   expect(div.innerHTML).toContain('Comment Box');
//   ReactDOM.unmountComponentAtNode(div);                // cleanup after test run
// });

// it('should shows a Comment List inside of App', function () {
//   const div = document.createElement('div');
//
//   ReactDOM.render(<App/>, div);
//   expect(div.innerHTML).toContain('Comment List');
//   ReactDOM.unmountComponentAtNode(div);
// });
