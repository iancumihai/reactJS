import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'
import App from './components/App'


const store = createStore(rootReducer)
console.log(store.getState())

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)