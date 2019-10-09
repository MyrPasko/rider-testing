import { CHANGE_AUTH } from '../../actions/types';

const initialState = {
  isAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_AUTH:

      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
}
