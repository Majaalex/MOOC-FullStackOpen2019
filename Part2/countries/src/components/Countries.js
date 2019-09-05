import React from 'react'
import Country from './Country'

const Countries = (props) => {
    console.log('props', props.data)
    if (props.data.length > 0 && props.data.length < 10) {
        if (props.data.length === 1) {
            return (
                <Country country={props.data[0]} />
            )
        } else {
            return (
                <div>
                    {props.data.map(x => {
                        return <p key={x.name}>{x.name}</p>
                    })}
                </div>
            )
        }
    } else {
        if (props.data.length === 0) {
            return <div>Your query gave 0 results</div>
        } else {
            return <div>Your query returned too many results</div>
        }
    }
}

export default Countries