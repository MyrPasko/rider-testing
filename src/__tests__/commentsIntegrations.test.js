import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';         // lib for mocking axios http requests
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
  moxios.install();                  // it will intercepts all requests
  moxios.stubRequest(
    'http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        { name: 'Fetched 1' },
        { name: 'Fetched 2' },
      ],
    }
  )
});

afterEach(() => {
  moxios.uninstall();
});

it('should fetch list of comments and display them', function (done) {
  const wrapped = mount(
    <Root>
      <App/>
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');

  // setTimeout approach
  // setTimeout(() => {
  //   wrapped.update();
  //
  //   expect(wrapped.find('li').length).toEqual(2);
  //
  //   done();
  //   wrapped.unmount();
  // }, 100);

  // moxios.wait approach
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });
});
