import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList'
import { withRouter } from 'react-router-dom'

class CoursesPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  }

  redirectToAddCoursePage () {
    this.props.history.push('/course')
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        <input type='submit'
          value='Add Course'
          className='btn btn-primary'
          onClick={this.redirectToAddCoursePage} />
        <CourseList courses={this.props.courses} />
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoursesPage))
