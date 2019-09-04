import React from 'react'
import Part from './Paragraph'

const Content = (props) => { 
    const parts = props.parts
    return (
        parts.map((part) => <Part part={part}  key={part.id}/>)
    )
  }

  export default Content