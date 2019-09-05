import React from 'react'
import Country from './Country'

const Countries = (props) => {
    const amount = props.data.length
    if(amount === 1) {return <Country country={props.data[0]} />} else
    if(amount > 0 && amount < 10) {return <Multiple data={props.data} />} else
    if(amount === 0) {return <None />} else {return <Many />}
}

const Multiple = (props) => (
    <div>
        {props.data.map(x => {
            return <p key={x.name}>{x.name}</p>
        })}
    </div>
)

const None = () => (
    <div>Your query gave 0 results</div>
)

const Many = () => (
    <div>Your query returned too many results</div>
)

export default Countries