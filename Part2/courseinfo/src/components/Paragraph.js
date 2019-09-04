import React from 'react'

const Paragraph = (props) => (
  <p key={props.part.id}>
  {props.part.name} {props.part.exercises}
  </p>
)

export default Paragraph