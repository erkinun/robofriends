import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './store/reducers'
import { robotsSagas } from './store/robots'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'tachyons'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

sagaMiddleware.run(robotsSagas)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
