import React from 'react'

const Part = (props) => (
  <p key={props.part.id}>
  {props.part.name} {props.part.exercises}
  </p>
)

export default Part