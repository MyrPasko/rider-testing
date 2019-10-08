import { FETCH_COMMENTS, SAVE_COMMENT } from '../../actions/types';

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
    case FETCH_COMMENTS:
      const commentsArray = action.payload.data.map(comment => comment.name);

      return {
        ...state,
        comments: [
          ...state.comments,
          ...commentsArray,
        ]
      };
    default:
      return state;
  }
}
