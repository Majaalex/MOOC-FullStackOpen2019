import React from 'react'

const Exercises = (props) => {
    const parts = props.parts
    const exercises = parts.reduce((total, current) => total + current.exercises,0)      
    
    return (
        <strong>Number of exercises {exercises}</strong>
    )
}

export default Exercises