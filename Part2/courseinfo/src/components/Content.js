import React from 'react'
import Part from './Part'

const Content = (props) => { 
    return (
      <div>
        <Part part1={props.parts[0]}/>
        <Part part1={props.parts[1]}/>
        <Part part1={props.parts[2]}/>
      </div>
    )
  }

  export default Content