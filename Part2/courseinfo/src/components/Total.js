import React from 'react'

const Total = (props) => {
    const parts = props.parts
    const exercises = parts.reduce((total, current) => {
        return total + current.exercises
    },0)      
    
    return (
        <p>Number of exercises {exercises}</p>
    )
}

export default Total