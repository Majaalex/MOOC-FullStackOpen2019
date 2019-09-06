import React from 'react'
import Country from './Country'

// Renders a specific div based on the size of the countries left after the filter in App.js
const Countries = (props) => {
    const amount = props.data.length
    if (amount === 1) { return <Country country={props.data[0]} /> } else
        if (amount > 0 && amount < 10) { return <Multiple data={props.data} onClick={props.onClick} value={props.value} /> } else
            if (amount === 0) { return <None /> } else { return <Many /> }
}

const Multiple = (props) => (
    <div>
        {props.data.map(x => {
            const current = props.data.filter(prop => prop.name === x.name);
            return <p key={x.name}> {x.name} <button onClick={props.onClick} value={current[0].name}>Show</button> </p>;
        })}
    </div>)

const None = () => <div>Your query gave 0 results</div>
const Many = () => <div>Your query returned too many results</div>


export default Countries