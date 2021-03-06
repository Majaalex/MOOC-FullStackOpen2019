import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))

  const updateSelected = () => {
      let random = 0
      // Avoid getting the same anecdote twice in a row
      do{
          random = getRandomInt(6)
      } while(random === selected)
      setSelected(random)
  }

  const updateVote = () => {
      const copy = [...votes]
      copy[selected] += 1
      setVotes(copy)
  }

  const hasMostVotes = (element) => element === Math.max(...votes)

  return (
    <div>
        <div>
        <Header text="Anecdote of the day" />
        {props.anecdotes[selected]}
        <Text text="votes" voteCount={votes[selected]}/>
        </div>
        <div>
        <Button handleClick={()=> updateSelected()} text="Next anecdote"/>
        <Button handleClick={()=> updateVote()} text="Vote" />
        </div>
        <Header text="Top voted anecdote" />
        <div>
        {props.anecdotes[votes.findIndex(hasMostVotes)]}
        <Text text="votes" voteCount={Math.max(...votes)}/>
        </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// Return a random number between 0 and the specified maximum
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))
const Header = (props) => <h1>{props.text}</h1>
const Text = (props) => <p>{props.voteCount} {props.text}</p>

// Render a button with an onClick function and a text
const Button = (props) => {
    return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
       
    )
}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)