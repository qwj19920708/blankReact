import { createStore } from 'redux'
import rootReducer  from './index'
// import { StoreState } from './types'
import initState from './initState'

export default function () {
    const store = createStore(rootReducer)
    return store
  }