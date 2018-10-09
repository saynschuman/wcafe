import { combineReducers } from 'redux'
import articles from './articles'
import { ReduxState } from './types'

export default combineReducers<ReduxState>({ articles })
