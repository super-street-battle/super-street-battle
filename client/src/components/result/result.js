import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Delayed from './delayed'
import Player from '../../utils/player'
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
        } else {
            time = 12000
        }
        if(props.state.ptotal > props.state.cputotal){
            result ='Congratulations, You Won!'
            setTimeout(_ => { setresultState({...resultState, isanimation: true, animation: animationarr[2], result})}, time)
            // setresultState({...resultState, animation: animationarr[2], result})
            Player.updatewin(props.state.id, {win: props.state.win + 1})
            Player.updateexperience(props.state.id, {experience: props.state.experience + 5})
            Player.updatebank(props.state.id, {bankAccount: props.state.money + (props.state.bet*2)})
        } else if (props.state.ptotal < props.state.cputotal) {
            result ='You Lost!'
            // setresultState({...resultState, animation: animationarr[0], result})
            setTimeout(_ => { setresultState({...resultState, isanimation: true, animation: animationarr[0], result})}, time)
            Player.updateloss(props.state.id, {loss: props.state.loss + 1})
            Player.updatebank(props.state.id, {bankAccount: props.state.money - props.state.bet})
        } else if (props.state.ptotal === props.state.cputotal) {
            result = "It's a tie!"
            // setresultState({...resultState, animation: animationarr[1], result})
            setTimeout(_ => { setresultState({...resultState, isanimation: true, animation: animationarr[1], result})}, time)
            Player.updateexperience(props.state.id, {experience: props.state.experience + 2})
            Player.updatetie(props.state.id, {tie: props.state.tie + 1})
        }
        // setresultState({...resultState, result})
        console.log(resultState.animation)
    }, [])
    // resultState.timer= _ => {
    //     setTimeout(_ => { setresultState({...resultState, isanimation: true})}, 9500)
    // }
      resultState.timer = _ => {
        if (props.state.logarr.length === 5) {
            return (
                <>
                <h1 className="result">Start!</h1>
                <Delayed waitBeforeShow={1000}>
                <p className="text"><FaRoad /> {props.state.logarr[0]}</p>
            </Delayed>

            <Delayed waitBeforeShow={3000}>
                <p className="text"><FaRoad /> {props.state.logarr[1]}</p>
            </Delayed>

            <Delayed waitBeforeShow={4500}>
                <p className="text"><FaRoad /> {props.state.logarr[2]}</p>
            </Delayed>

            <Delayed waitBeforeShow={6000}>
                <p className="text"><FaRoad /> {props.state.logarr[3]}</p>
            </Delayed>

            <Delayed waitBeforeShow={7500}>
                <p className="text"><FaRoad /> {props.state.logarr[4]}</p>
            </Delayed>
            </>
            )
        } else {
            return (
                <>
                <h1 className="result">Start!</h1>
                <Delayed waitBeforeShow={1000}>
                <p className="text"><FaRoad /> {props.state.logarr[0]}</p>
            </Delayed>

            <Delayed waitBeforeShow={3000}>
                <p className="text"><FaRoad /> {props.state.logarr[1]}</p>
            </Delayed>

            <Delayed waitBeforeShow={4500}>
                <p className="text"><FaRoad /> {props.state.logarr[2]}</p>
            </Delayed>

            <Delayed waitBeforeShow={6000}>
                <p className="text"><FaRoad /> {props.state.logarr[3]}</p>
            </Delayed>

            <Delayed waitBeforeShow={7500}>
                <p className="text"><FaRoad /> {props.state.logarr[4]}</p>
            </Delayed>
            <Delayed waitBeforeShow={9000}>
                <p className="text"><FaRoad /> {props.state.logarr[5]}</p>
            </Delayed>
            </>
            )
        }}
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
            <p className="text">Theirs: {props.state.cputotal}</p>
            <br/>
            <img src={resultState.animation} /> 
            <Delayed waitBeforeShow={5000}>
            <button className="finishbtn"><Link to='/Garage'>Finish!</Link></button>
            </Delayed>
            </>
            :
            <>
            {resultState.timer()}
            {/* <Delayed waitBeforeShow={1000}>
                    <p>{props.state.logarr[0]}</p>
                </Delayed>

                <Delayed waitBeforeShow={3000}>
                    <p>{props.state.logarr[1]}</p>
                </Delayed>

                <Delayed waitBeforeShow={4500}>
                    <p>{props.state.logarr[2]}</p>
                </Delayed>

                <Delayed waitBeforeShow={6000}>
                    <p>{props.state.logarr[3]}</p>
                </Delayed>

                <Delayed waitBeforeShow={7500}>
                    <p>{props.state.logarr[4]}</p>
                </Delayed> */}
            </>
        }
            {/* <div className="container">
            <div>
                <Delayed waitBeforeShow={1000}>
                    <p>{props.state.logarr[0]}</p>
                </Delayed>

                <Delayed waitBeforeShow={2500}>
                    <p>{props.state.logarr[1]}</p>
                </Delayed>

                <Delayed waitBeforeShow={4000}>
                    <p>{props.state.logarr[2]}</p>
                </Delayed>

                <Delayed waitBeforeShow={5500}>
                    <p>{props.state.logarr[3]}</p>
                </Delayed>

                <Delayed waitBeforeShow={7000}>
                    <p>{props.state.logarr[4]}</p>
                </Delayed>

                <Delayed waitBeforeShow={9500} id="animationGif">
                        <p>{resultState.result}</p>
                        <br/>
                        <p>Your Total: {props.state.ptotal}</p> 
                        <br/>
                        vs 
                        <br/>
                        <p>Theirs: {props.state.cputotal}</p>
                        <br/>
                        {resultState.animation === '' ? null : <img src={resultState.animation} />}
                </Delayed>
                <Delayed waitBeforeShow={11000}>
                    <button><Link to='/Garage'>Finish!</Link></button>
                </Delayed> */}
            {/* </div>
            </div> */}
            </div>
        )
    }

export default Result