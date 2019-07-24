import React, {useEffect, useState} from 'react'
import Player from '../../utils/player'

const Result = props => {
    const [resultState, setresultState] = useState({
        result: ''
    })
    useEffect(_ => {
        console.log(props)
        let result = resultState.result
        if(props.state.ptotal > props.state.cputotal){
            result ='Congratulations, You Won!'
            Player.updatewin(props.state.id, {win: props.state.win + 1})
            Player.updateexperience(props.state.id, {experience: props.state.experience + 5})
            Player.updatebank(props.state.id, {bankAccount: props.state.money + (props.state.bet*2)})
        } else if (props.state.ptotal < props.state.cputotal) {
            result ='You Loss'
            Player.updateloss(props.state.id, {loss: props.state.loss + 1})
            Player.updatebank(props.state.id, {bankAccount: props.state.money - props.state.bet})
        } else if (props.state.ptotal === props.state.cputotal) {
            result = "It's a tie!"
            Player.updateexperience(props.state.id, {experience: props.state.experience + 2})
            Player.updatetie(props.state.id, {tie: props.state.tie + 1})
        }
        setresultState({...resultState, result})
    }, [])

    return (
        <>
            <h1>Result page</h1>
        </>
    )
}

export default Result