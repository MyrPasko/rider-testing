import React from 'react';
import { mount } from 'enzyme';          // FullDOM
import CommentBox from '../CommentBox';
import Root from '../../Root';

// first way to fix problem with the global store and tests
// BAD WAY
//
// import { createStore } from "redux";
// import { Provider } from 'react-redux';
// import reducers from '../reducers/index';
//
// beforeEach(() => {
//   wrapped = mount(
//     <Provider store={createStore(reducers, {})}>
//       <CommentBox/>
//     </Provider>
//   );
// });

// We will use here FullDOM

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox/>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});


it('should have a text area and a button', function () {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

// Simulating event on element.
describe('the text area', () => {           // can wrap chosen tests for describing logic for them only
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {    // simulate event object on element
      target: {
        value: 'new comment',
      }
    });
    wrapped.update();                                // force to self-update.
  });

  it('should has a textarea that users can type in', function () {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');  // here we checking if property 'value' of element receive correct value 'new comment'
  });

  it('should clear textarea after form submit', function () {

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });

});
