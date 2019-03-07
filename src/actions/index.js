import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('https://swapi.co/api/people')
    .then(res => 
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data.results
      }))
    .catch(err => dispatch({
      type: FETCH_FAILURE,
      payload: err
    }));
}