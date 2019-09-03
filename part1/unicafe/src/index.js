import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>
        {props.text}
    </h1>
)

// Renders a button with an onClick function and a text from props
const Button  = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => {
    return(
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

// Renders all statistic components
const Statistics = (props) => {
    if(props.total !== 0){
        const average = (props.good - props.bad) / props.total
        const positive = (props.good / props.total* 100) + "%"
        return  (
            <div>
                <table>
                    <tbody>
                    <Statistic text="Good" value={props.good}/>
                    <Statistic text="Neutral" value={props.neutral}/>
                    <Statistic text="Bad" value={props.bad}/>
                    <Statistic text="Total" value={props.total} />
                    <Statistic text="Average" value={average} />
                    <Statistic text="Positive" value={positive}/>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <div><p>No feedback given</p></div>
    }
    
}

const App = () => {
    // Save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const addValue = (state, newValue) =>{
        state(newValue)
        setTotal(total+1)
    }
   
    return (
    <div>
        <Header text="Give feedback" />
        <Button handleClick={() => addValue(setGood, good + 1)} text="Good" />
        <Button handleClick={() => addValue(setNeutral, neutral + 1)} text="Neutral" />
        <Button handleClick={() => addValue(setBad, bad + 1)} text="Bad" />        
        <Header text="Statistics" />
        <Statistics total={total} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)