import React from 'react'
import Paragraph from './Paragraph'

const Content = (props) => { 
    const parts = props.parts
    return (
        parts.map((part) => <Paragraph part={part}  key={part.id}/>)
    )
  }

  export default Content