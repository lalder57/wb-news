import axios from "axios";

const initialState = {
  loading: false,
  articles: []
}

const PENDING = 'PENDING';
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

export const requestArticles= async (dispatch) => {
  dispatch({
    type: PENDING
  })
  
  let res = await axios.get('/api/reddit')
  
  dispatch({
    type: REQUEST_ARTICLES,
    payload: res.data
  })
} 

export default function redditReducer(state = initialState, action) {
  switch(action.type) {
    case 'PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'REQUEST_ARTICLES':
      return {
        ...state,
        loading: false,
        articles: action.payload,
      }
    default:
      return state;
  }
}