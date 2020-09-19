import { combineReducers } from 'redux'
import { fetchRobotsReducer } from './robots'
import { searchRobotsReducer } from './search'

export default combineReducers({ fetchRobotsReducer, searchRobotsReducer })
