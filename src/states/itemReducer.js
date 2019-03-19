import axios from 'axios'

export const LOAD_ITEMS = 'LOAD_ITEMS'
export const GET_ITEMS = 'GET_ITMES'
export const POST_ITEM = 'POST_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export const loadItems = () => ({type: LOAD_ITEMS})
export const getItems = () => dispatch => {
  dispatch(loadItems())
  axios.get('/api/items').then(res => 
    dispatch({type: GET_ITEMS, load: res.data}))
}
export const postItem = item => dispatch => {
  axios.post('/api/items', item).then(res => {
    console.log(res)
    dispatch({type: POST_ITEM, load: res.data})})
}
export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({type: DELETE_ITEM, load: id})) 
}

const initialState = {loading: false, items: []}
export default function (state=initialState, action) {
  switch(action.type) {
    case LOAD_ITEMS:
      return {...state, loading: true}
    case GET_ITEMS: 
      return {...state, loading: false, items: action.load}
    case POST_ITEM:
      return {...state, items: [...state.items, action.load]}
    case DELETE_ITEM: 
      return {...state, items: state.items.filter(item => item._id !== action.load)}  
    default: 
      return state
  }
}