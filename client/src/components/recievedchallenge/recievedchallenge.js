import React, {useState, useEffect} from 'react'
import Challenge from '../../utils/challenges'
import Accept from '../accept'
import Player from '../../utils/player'
import './receivedchallenge.css'
import { IoIosArrowBack, IoIosEye } from "react-icons/io";

const Rchallenges = _ => {
    const [challengesState, setchallengesState] = useState({
        challenges: [],
        challenge: {},
        view: false,
        accept: false,
        money: null
    })

    useEffect( _ => {
        Player.getone(localStorage.getItem('_id'))
        .then(({data}) => {
            let money = data.bankAccount
            Challenge.getall(localStorage.getItem('_id'))
            .then(({data}) => {
                if (data.length < 1) {
                    setchallengesState({...challengesState, challenges: null})
                } else {
                    let challenges = []
                    let challenge
                    data.forEach(user => {
                        console.log(user)
                        challenge = {
                            userName: user.sendername,
                            id: user._id,
                            uid: user.sender,
                            bet: user.bet
                        }
                        challenges.push(challenge)   
                    });
                    setchallengesState({...challengesState, challenges, money})
                }
            })
        })
        .catch(e => console.error(e))
    }, [])

    challengesState.viewchallenge = e => {
        Challenge.getone(e.target.id)
        .then(({data}) => {
           setchallengesState({...challengesState, challenge: data, view: true})
        })
        .catch(e => console.error(e))
    }

    challengesState.deletechallenge = e => {
        let bet = e.target.dataset.bet
        let sender = e.target.dataset.sender
        let id = e.target.id
        let val = e.target.value
        Player.getone(e.target.dataset.sender)
        .then(({data}) => {
            let money = data.bankAccount
            Player.updatebank(sender, {bankAccount: money + parseInt(bet)})
            .then(_ => {
                Challenge.deleteone(id)
                let challenges = challengesState.challenges
                challenges.splice(val, 1)
                setchallengesState({...challengesState, challenges, view: false})
            })
        })
        .catch(e => console.error(e))
    }
    
    challengesState.acceptchallenge = e => {
        console.log(challengesState.money)
        if (challengesState.money < challengesState.challenge.bet) {
            alert('Not enough money to accept.')
        } else {
            setchallengesState({...challengesState, accept: true})
        }
    }

    challengesState.back = _ => {
        setchallengesState({...challengesState, view: false})
    }

    return (
        <>
            {challengesState.view ? 
                <>
                    {challengesState.accept ? 
                        <>
                            <Accept challenge={challengesState.challenge}/>
                        </>
                        :
                        <div>
                            <button className="backbtn" onClick={challengesState.back}><IoIosArrowBack /></button>
                            <div className="messagecontainer">
                                <p className="message">{challengesState.challenge.message.one}</p>
                                <p className="message">Location information:</p>
                                <p className="message">{challengesState.challenge.message.two}</p>
                                <p className="message">{challengesState.challenge.message.three}</p>
                                <p className="message">{challengesState.challenge.message.four}</p>
                                <p className="message">{challengesState.challenge.message.five}</p>
                                <button className="accept" onClick={challengesState.acceptchallenge} id={challengesState.challenge._id}>Accept</button>
                            </div>
                        </div>
                    }
                </>
            :
                <>
                    {challengesState.challenges === null ? <h1 className="na">You don't have any new challenge</h1> : 
                    <>
                    {challengesState.challenges.map((challenge, index) => (
                        // <div>
                            <div className="received">
                                <div className="sender">
                                    {challenge.userName}
                                </div>
                                <button className="receivedbtn" id={challenge.id} value={index} onClick={challengesState.viewchallenge}>View</button>
                                <button className="receivedbtn" id={challenge.id} value={index} data-bet={challenge.bet} data-sender={challenge.uid} onClick={challengesState.deletechallenge}>Delete</button>
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

export default Rchallenges