import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>
        {props.text}
    </h1>
)

const Button  = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = (props) => <p>{props.text} {props.value}</p>

const Statistics = (props) => {
    const average = props.total ? ((props.good - props.bad) / props.total) : 0
    const positive = props.total ? (props.good / props.total* 100) : 0
    return  (
        <div>
            <Statistic text="Good" value={props.good}/>
            <Statistic text="Neutral" value={props.neutral}/>
            <Statistic text="Bad" value={props.bad}/>
            <Statistic text="Total" value={props.total} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positive}/>
        </div>
    )
}

const App = () => {
    const title = "Give feedback"
    const goodT = "Good"
    const neutralT = "Neutral"
    const badT = "Bad"
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const addToGood = newValue => {
        setGood(newValue)
        addToTotal(total + 1)
    }
    const addToNeutral = newValue => {
        setNeutral(newValue)
        addToTotal(total + 1)
    }
    const addToBad = newValue => {
        setBad(newValue)
        addToTotal(total + 1)
    }    
    const addToTotal = newValue =>setTotal(newValue)
   
    return (
    <div>
        <Header text={title} />
        <Button handleClick={() => addToGood(good + 1)} text={goodT} />
        <Button handleClick={() => addToNeutral(neutral + 1)} text={neutralT} />
        <Button handleClick={() => addToBad(bad + 1)} text={badT} />
        <Header text="Statistics" />
        <Statistics total={total} good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)