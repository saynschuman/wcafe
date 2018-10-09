import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  LOAD_NEW_REQUEST,
  LOAD_NEW_SUCCESS,
} from '../actions'

const initialState = {
  isLoading: false,
  isLoaded: false,
  items: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true, isLoaded: false }
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        items: action.payload.items,
      }
    case LOAD_NEW_REQUEST:
      return { ...state, isLoading: true, isLoaded: false }
    case LOAD_NEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        items: action.payload.items,
      }
    default:
      return state
  }
}
