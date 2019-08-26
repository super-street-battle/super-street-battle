import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Delayed from './delayed'
import './result.css'
import { FaRoad } from "react-icons/fa";

const Result = props => {
    const [resultState, setresultState] = useState({
        result: '',
        animation: '',
        isanimation: false
        
    })

    useEffect(_ => {
        let animationarr = props.state.caranimation.split(',')
        let result = resultState.result
        let time 
        if (props.state.logarr.length === 5) {
            time = 10500
        } else if (props.state.logarr.length === 6) {
            time = 12000
        } else if (props.state.logarr.length === 7) {
            time = 13500
        }
        if(props.state.ptotal > props.state.ototal){
            result ='Congratulations, You Won!'
            setTimeout(_ => { setresultState({...resultState, isanimation: true, animation: animationarr[2], result})}, time)
        } else if (props.state.ptotal < props.state.ototal) {
            result ='You Lost!'
            setTimeout(_ => { setresultState({...resultState, isanimation: true, animation: animationarr[0], result})}, time)
        } else if (props.state.ptotal === props.state.ototal) {
            result = "It's a tie!"
            setTimeout(_ => { setresultState({...resultState, isanimation: true, animation: animationarr[1], result})}, time)
        }
    }, [])

        return (
            <div className="resultcontainer">
                {resultState.isanimation ?
                    <>
                        <p className="result">{resultState.result}</p>
                        <br/>
                        <p className="text">Your Total: {props.state.ptotal}</p> 
                        <br/>
                        <p>vs</p> 
                        <br/>
                        <p className="text">{props.state.oname}: {props.state.ototal}</p>
                        <br/>
                        <img src={resultState.animation} /> 
                        <Delayed waitBeforeShow={5000}>
                        <button className="finishbtn"><Link to='/Garage'>Finish!</Link></button>
                        </Delayed>
                    </>
                    :
                    <>
                        <h1 className="result">Start!</h1>
                        {props.state.logarr.map((log, i) => (
                            <Delayed waitBeforeShow={1500*(i+=1)}>
                                <p className="text"><FaRoad /> {log}</p>
                            </Delayed>
                        ))}
                    </>
                }
            </div>
        )
    }

export default Result