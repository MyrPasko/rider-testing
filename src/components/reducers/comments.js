import { SAVE_COMMENT } from '../../actions/types';

const initialState = {
  comments: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_COMMENT:

      return {
        ...state,
        comments: [
          ...state.comments,
          action.payload,
        ]
      };
    default:
      return state;
  }
}
