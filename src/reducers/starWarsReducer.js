import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
const initialState = {
  characters: [],
  isFetching: false,
  error: '',
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
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
