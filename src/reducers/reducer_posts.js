import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      // es5
      //const post = action.payload.data;
      //const newState = { ...state };
      //newState[post.id] = post;
      // es6: key interpolation
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      //console.log(action.payload.data); // [ list of posts ]
      // convert it to object
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
