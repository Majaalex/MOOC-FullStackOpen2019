import React from 'react'

const Input = (props) => (
    <div>
        Find countries: <input value={props.value} onChange={props.onChange} />
    </div>
)

export default Input