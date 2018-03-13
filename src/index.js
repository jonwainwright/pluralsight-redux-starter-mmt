/* eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {loadCourses} from './actions/courseActions'
import {loadAuthors} from './actions/authorActions'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'
import './styles/styles.css' // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/toastr/build/toastr.min.css'

const store = configureStore()

// Dispatch actions to load initial state.
store.dispatch(loadCourses())
store.dispatch(loadAuthors())

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
)
