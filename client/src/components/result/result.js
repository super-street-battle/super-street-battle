import React, { useEffect } from 'react'

const Result = props => {

    useEffect(_ => {
        console.log(props)
    }, [])

    return (
        <>
            <h1>Result page</h1>
        </>
    )
}

export default Result