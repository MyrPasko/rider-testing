import React from 'react';
import { mount } from 'enzyme';          // FullDOM
import CommentList from '../CommentList';
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: {
      comments: ['Comment 1', 'Comment 2'],
    }
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should creates one LI per comment', function () {
  expect(wrapped.find('li').length).toEqual(2);
});

it('should shows the text for each comment', function () {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
