import React from 'react'
import Courses from './Courses'

const App = (props) => {
    const courses = props.courses
    return (
        <Courses courses={courses}/>
    )
  }

export default App