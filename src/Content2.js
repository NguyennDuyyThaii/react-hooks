import React from 'react'

function Content2({OnIncrease}) {
    return (
        <>
        <h2>Hello anh em</h2>
        <button onClick={OnIncrease}>Click me !</button>
        </>
    )
}

export default React.memo(Content2)