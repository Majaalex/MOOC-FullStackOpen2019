import React from 'react'

const Notification = ( {message, type} ) => {
    if (message === null) return null
    const messageType = (type === 'confirmation') ? 'confirmation' : 'error'
    return (
        <div className={messageType}>
            {message}
        </div>
    )
}


export default Notification