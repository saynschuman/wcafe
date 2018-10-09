import { GET_DATA_REQUEST, LOAD_NEW_REQUEST, LOAD_NEW_SUCCESS } from '.'

import { filterArticlesFunc } from '../backend/tmp_api'

export function addTodo(items) {
  return {
    type: GET_DATA_REQUEST,
    items,
  }
}

export const loadNewArticles = (hash) => (dispatch) => {
  dispatch({
    type: LOAD_NEW_REQUEST,
  })
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterArticlesFunc(hash))
    }, 300)
  })

  promise.then((result) => {
    return dispatch({
      type: LOAD_NEW_SUCCESS,
      payload: {
        items: result,
      },
    })
  })
}
