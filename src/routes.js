import React from 'react'
import {Route} from 'react-router-dom'
import App from './components/App'
import HomePage from './components/home/HomePage'
import CoursesPage from './components/course/CoursesPage'
import ManageCoursePage from './components/course/ManageCoursePage'
import AboutPage from './components/about/AboutPage'

export default () => {
  return (
    <Route path='/'>
      <App>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/courses' component={CoursesPage} />
        <Route exact path='/course/:id' component={ManageCoursePage} />
        <Route exact path='/course' component={ManageCoursePage} />
        <Route exact path='/about' component={AboutPage} />
      </App>
    </Route>
  )
}
