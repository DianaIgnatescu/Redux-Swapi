import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  isFetching: false,
  error: '',
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: {
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ''
      }
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state;
  }
};
