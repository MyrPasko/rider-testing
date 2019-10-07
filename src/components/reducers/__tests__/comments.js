import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../../actions/types';

let initialState;

beforeEach(() => {
  initialState = {
    comments: [],
  };
});

it('should handles action of type SAVE_COMMENT', function () {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };
  const newState = commentsReducer(initialState, action);

  expect(newState).toEqual({comments: ['new comment']});
});

it('should handles action with unknown type', function () {
  const action = {
    type: 'ABRACADABRA',
  };
  const newState = commentsReducer(initialState, action);

  expect(newState).toEqual(initialState);
}); 
