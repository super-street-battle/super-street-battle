import React, {useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'
import Delayed from './delayed'
import race from '../../pages/race/race'
import Player from '../../utils/player'
import './result.css'
import Garage from '../../pages/garage'

const Result = props => {
    const [resultState, setresultState] = useState({
        result: '',
        animation: '',
    })

    useEffect(_ => {
        console.log(props)
        let animationarr = props.state.caranimation.split(',')
        let result = resultState.result
        if(props.state.ptotal > props.state.cputotal){
            result ='Congratulations, You Won!'
            setresultState({...resultState, animation: animationarr[2]})
            Player.updatewin(props.state.id, {win: props.state.win + 1})
            Player.updateexperience(props.state.id, {experience: props.state.experience + 5})
            Player.updatebank(props.state.id, {bankAccount: props.state.money + (props.state.bet*2)})
        } else if (props.state.ptotal < props.state.cputotal) {
            result ='You Lost!'
            setresultState({...resultState, animation: animationarr[0]})
            Player.updateloss(props.state.id, {loss: props.state.loss + 1})
            Player.updatebank(props.state.id, {bankAccount: props.state.money - props.state.bet})
        } else if (props.state.ptotal === props.state.cputotal) {
            result = "It's a tie!"
            setresultState({...resultState, animation: animationarr[1]})
            Player.updateexperience(props.state.id, {experience: props.state.experience + 2})
            Player.updatetie(props.state.id, {tie: props.state.tie + 1})
        }
        setresultState({...resultState, result})
    }, [])

        var background = resultState.animation

      
        return (
            <>
            <div className="Result">
            <div>
                <Delayed waitBeforeShow={1000}>
                    <p>{props.state.logarr[0]}</p>
                </Delayed>

                <Delayed waitBeforeShow={2000}>
                    <p>{props.state.logarr[1]}</p>
                </Delayed>

                <Delayed waitBeforeShow={3000}>
                    <p>{props.state.logarr[2]}</p>
                </Delayed>

                <Delayed waitBeforeShow={4000}>
                    <p>{props.state.logarr[3]}</p>
                </Delayed>

                <Delayed waitBeforeShow={5000}>
                    <p>{props.state.logarr[4]}</p>
                </Delayed>

                <Delayed waitBeforeShow={6000} style={{ "backgroundImage": {background}, "max-width": "300px"}}>
                    <Delayed waitBeforeShow={10000}>
                        <p>{resultState.result}</p>
                        <p>Your Total: {props.state.ptotal} vs Theirs: {props.state.cputotal}</p>
                    </Delayed>
                </Delayed>
            </div>
            <div>
                <input id="inp" type="button" value="return to garage" Route path="/Garage" component={Garage} />
 />
            </div>
            </div>
            </>
        )
    }

export default Result