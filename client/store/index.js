import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import result from './result'
import challenge from './challenge'
import modalOpen from './modal'

const reducer = combineReducers({user, result, challenge, modalOpen})
const devMiddleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const prodMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store =
  process.env.NODE_ENV === 'production'
    ? createStore(reducer, prodMiddleware)
    : createStore(reducer, devMiddleware)

export default store
export * from './user'
export * from './challenge'
export * from './modal'
