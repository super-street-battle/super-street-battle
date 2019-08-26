import React, {useEffect, useState} from 'react'
import Results from '../../utils/result'
import Result from '../result'

const Challengeres = _ => {
    const [resultState, setresultState] = useState({
        results: [],
        isView: false,
        ptotal: null,
        ototal: null,
        caranimation: '',
        logarr: [],
        oname: ''
    })
    useEffect(_ => {
        Results.getall(localStorage.getItem('_id'))
        .then(({data}) => {
            if (data.length < 1) {
                setresultState({...resultState, results: null})
            } else {
                setresultState({...resultState, results: data})
            }
        })
        .catch(e => console.error(e))
    }, [])

    resultState.delete = e => {
        Results.deleteone(e.target.id)
    }

    resultState.view = e => {
        console.log(resultState.results[e.target.value]._id)
        Results.deleteone(resultState.results[e.target.value]._id)
        setresultState({
            ...resultState, 
            ptotal: resultState.results[e.target.value].ptotal,
            ototal: resultState.results[e.target.value].ototal,
            caranimation: resultState.results[e.target.value].animation[0],
            logarr: resultState.results[e.target.value].log,
            oname: resultState.results[e.target.value].sender,
            isView: true
        })
    }

    return (
        <>
            {resultState.isView ? 
                <>
                    <Result state={resultState}/>
                </> 
                :
                <>
                    {resultState.results === null ? <h1 className="na">You don't have any new result</h1> : 
                    <>
                    {resultState.results.map((result, index) => (
                        // <div>
                            <div className="received">
                                <div className="sender">
                                    {result.sender}
                                </div>
                                <button className="receivedbtn" value={index} onClick={resultState.view} >View</button>
                                <button className="receivedbtn" id={result._id} value={index} onClick={resultState.delete} >Delete</button>
                            </div>
                        // </div>
                    ))}
                    </>
                    }
                </>
            }
        </>
    )
}

export default Challengeres