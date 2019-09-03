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

const Display = (props) => (
    <div>
        <p>{props.text} {props.number}</p>
    </div>
)
const Statistics = (props) => {
    if(props.total != 0){
        return(
            <div>
                <p>Average {(props.good - props.bad) / props.total}</p>
                <p>Positive {props.good / props.total* 100}%</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
}

const App = () => {
    const title = "Give feedback"
    const goodT = "Good"
    const neutralT = "Neutral"
    const badT = "Bad"
    const totalT = "Total"
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
        <Display number={good} text={goodT}/>
        <Display number={neutral} text={neutralT}/>
        <Display number={bad} text={badT}/>
        <Display number={total} text={totalT} />
        <Header text="Statistics" />
        <Statistics total={total} good={good} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)