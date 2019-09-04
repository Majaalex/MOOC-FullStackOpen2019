import React from 'react'
import Header from './Header'
import Content from './Content'
import Exercises from './Exercises'

const Courses = (props) => {
    const courses = props.courses
    return(
        // Map each course in courses and create the relevant fields
        courses.map((course) => 
        <div  key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Exercises parts={course.parts} />
        </div>
    )
     
    )
  }

  export default Courses