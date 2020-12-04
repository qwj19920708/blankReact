import { combineReducers } from 'redux'
import { enthusiasm } from './reducer/demo'
import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({
  demo: enthusiasm,
  routing: routerReducer
})

export default rootReducer