import React, {useEffect, useState, useRef} from 'react'
import Slide from '../challenges/slide'
import SlideLoc from '../challenges/slideLoc'
import SlideItem from '../challenges/slideItem'
import Car from '../../utils/car'
import Player from '../../utils/player'
import tracks from '../../raceTrack.json'
import Challenges from '../../utils/challenges'
import { Link } from 'react-router-dom'
import './pvp.css'

const grippyTire = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852066775'
const oil = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852214573'
const nitro = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852192955'

const rantracks = _ => {
    return tracks.map(item => {
        let weathers = item.weather
        return {
            id: item.id,
            track: item.tracks,
            terrain: item.terrain,
            weather:  weathers[Math.floor(Math.random()*weathers.length)]
        }
    })
}

const getcars = (setpvpState, tracks, pvpState, playersarr, oid) => {
    Car.getall(localStorage.getItem('_id'))
        .then(({data}) => {
            const items = [
                {
                    itemImage: grippyTire,
                    amount: data.grippyTires,
                    name: "grippyTires",
                    cost: 10
                },
                {
                    itemImage: oil,
                    amount: data.oil,
                    name: "oil",
                    cost: 15
                },
                {
                    itemImage: nitro,
                    amount: data.nitro,
                    name: "nitro",
                    cost: 20
                }
            ]
                    
            setpvpState({
                ...pvpState,
                id: data._id,
                cars: data.cars, 
                money: data.bankAccount, 
                items,
                tracks,
                userName: data.userName,
                experience: data.experience,
                opponents: playersarr,
                oid
            })
        })
        .catch(e => console.error(e))
}

const pvp = (pvpState, betinput, e) => {
    return (
        <div>
            {pvpState.isCar ? null : 
                <div>
                    <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginTop:'7%'}}>Select your car:</h1>
                    <Slide cars={pvpState.cars} carSelect={pvpState.carSelect}/>
                    <br />
                </div>
            }
            <br />
            {pvpState.isItem ? null :
                <div>
                    <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginTop:'2%'}}>Select your item:</h1>
                    <SlideItem items={pvpState.items} itemSelect={pvpState.itemSelect} handlepurchase={pvpState.handlepurchase} />
                    <br />
                </div>
            }
            <br />
            {pvpState.isLoc ? null :
                <div>
                    <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginTop:'2%'}}>Select the track:</h1>
                    <SlideLoc tracks={pvpState.tracks} trackselect={pvpState.trackselect}/>
                    <br />
                </div>
            }
            <br />
            <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginBottom:'4%'}}>Place your bet!</h1>
            <div className="bets">
                <label htmlFor='bet'>$</label>
                <input id='bet' type='number' ref={betinput} placeholder="0"/>
            </div>
            <p>Max bet ${pvpState.money}</p>
            <button className="racebtn" onClick={pvpState.startrace} >Race</button>
        </div>
    )
}

const page = (opponentsel, opponentselect, pvpState, betinput, e) => {
    if (pvpState.chosen === undefined) {
        return (
            <div>
                <div className="opponentsel">
                    <select ref={opponentselect} onChange={opponentsel}>
                        <option value="" disabled selected>Opponents</option>
                        {pvpState.opponents.map(opponent => (
                            <option value={opponent._id} >{opponent.userName} - {opponent.experience}</option>
                        ))}
                    </select>
                </div>
                {pvp(pvpState, betinput, e)}
            </div>
        )
    } else {
        return (
            <div>
                {pvp(pvpState, betinput, e)}
            </div>
        )
    }
}

const PvP = props => {

    const betinput = useRef()

    const opponentselect = useRef()

    
    const [pvpState, setpvpState] = useState({
        chosen: props._id,
        challengedplayer: '',
        id: '',
        userName: '',
        cars: [],
        pengine: null,
        pbodyKit: null,
        ptire: null,
        bet: null,
        items: [],
        useItem: '',
        ptotal: null,
        isCar: false,
        isItem: false,
        isLoc: false,
        caranimation: [],
        money: null,
        tracks: [],
        experience: null,
        opponents: [],
        oid: '',
        location: {},
        isSend: false
    })
    useEffect(_ => {
        setbetState(null)
        let max
        let min
        let id = localStorage.getItem('_id')
        let playersarr = []
        let tracks = rantracks()
        let oid = ''
        Player.getone(localStorage.getItem('_id'))
        .then(({data}) => {
            if (pvpState.chosen === undefined) {
                max = data.experience + 20
                min = data.experience - 20
                Player.getrange(id, max, min)
                .then(({data}) => {
                    playersarr = data
                    getcars(setpvpState, tracks, pvpState, playersarr, oid)
                })
                .catch(e => console.error(e))
            } else {
                oid = pvpState.chosen
                getcars(setpvpState, tracks, pvpState, playersarr, oid)
            }
        })
        .catch(e => console.error(e))
    }, [])
    
    pvpState.opponentsel = _ => {
        setpvpState({ ...pvpState, oid: opponentselect.current.value})
    }
    
    pvpState.carSelect= e =>{
        setpvpState({
            ...pvpState,
            ptotal: parseFloat(e.target.dataset.engine) + parseFloat(e.target.dataset.tire) + parseFloat(e.target.dataset.bodykit),
            pengine:parseFloat( e.target.dataset.engine),
            ptire: parseFloat(e.target.dataset.tire),
            pbodyKit: parseFloat(e.target.dataset.bodykit),
            caranimation: e.target.dataset.animation,
            isCar: true
        })
    }
        
    const [betState, setbetState] = useState(null)

    pvpState.startrace = _ => {
        if (betinput.current.value > pvpState.money){
            alert('Bet exceed amout available!')
        } else if (pvpState.oid === '') {
            alert('Please select your opponent.')
        } else if (pvpState.isCar && pvpState.isLoc ) {
            if (betinput.current.value !== '') {
                Player.updatebank(pvpState.id, {bankAccount: pvpState.money - betinput.current.value})
            .then(_ => {
                setbetState(parseInt(betinput.current.value))
                setpvpState({
                    ...pvpState,
                    bet: parseInt(betinput.current.value),
                    money: pvpState.money - betinput.current.value,
                    isSend: true
                })
            })
            .catch(e => console.error(e))
            } else {
                setbetState(0)
                setpvpState({
                    ...pvpState,
                    bet: 0,
                    isSend: true
                })
            }
        }
    }

    useEffect(() => {
        if (betState !== null) {
            let challenge = {
                sender: pvpState.id,
                sendername: pvpState.userName,
                pengine: pvpState.pengine,
                pbodyKit: pvpState.pbodyKit,
                ptire: pvpState.ptire,
                ptotal: pvpState.ptotal,
                item: pvpState.useItem,
                bet: pvpState.bet,
                animation: pvpState.caranimation,
                message: {
                    one: `You have been challenged by ${pvpState.userName} - ${pvpState.experience}!`,
                    two: `Track - ${pvpState.location.track}`,
                    three: `Terrain - ${pvpState.location.terrain}`,
                    four: `Weather - ${pvpState.location.weather}`,
                    five: `${pvpState.userName} has bet $${pvpState.bet}. Do you accept the challenge?`
                },
                location: {
                    part: pvpState.location.part,
                    point: pvpState.location.points
                },
                receiver: pvpState.oid
            }
            Challenges.postone(challenge)
            .then(({data}) => {
                console.log(data.message)
                console.log(data.animation)
            })
            .catch(e => console.error(e))
        }
    })

    pvpState.itemSelect= e => {
        let items = pvpState.items
        items[e.target.id].amount = parseInt(items[e.target.id].amount) - 1
        if (e.target.value === "oil") {
            Player.putone(localStorage.getItem('_id'), 'oil', {oil: items[e.target.id].amount})
        } else if (e.target.value === "nitro") {
            Player.putone(localStorage.getItem('_id'), 'nitro', {nitro: items[e.target.id].amount})
        } else if (e.target.value === "grippyTires") {
            Player.putone(localStorage.getItem('_id'), 'grippyTires', {grippyTires: items[e.target.id].amount})
        }
        setpvpState({ 
            ...pvpState,
            useItem: e.target.value,
            items,
            isItem: true
        })
    }
    pvpState.trackselect = e => {
        if (pvpState.isCar) {
            let location = {
                points: parseFloat(e.target.value),
                track: e.target.dataset.track,
                terrain: e.target.dataset.terrain,
                weather: e.target.dataset.weather,
                part: e.target.id
            }
            setpvpState({...pvpState, location, isLoc: true})
        } else {
            alert('Please select your car')
        }
    }   

    pvpState.handlepurchase = e => {
        if (pvpState.money < e.target.value) {
            alert('Not enough cash for this item!')
        } else {
            let cost = parseInt(e.target.value)
            let item = e.target.id
            let items = pvpState.items
            items[e.target.dataset.i].amount = parseInt(e.target.dataset.amount) + 1
            Player.putone(pvpState.id, item, {[item]: parseInt(e.target.dataset.amount) + 1})
            Player.updatebank(pvpState.id, {bankAccount: pvpState.money - cost})
            setpvpState({
                ...pvpState,
                items,
                money: pvpState.money - cost
            })
            
        }
    }

    return (
        <>
        {pvpState.isSend ?
            <div>
                <h1 className="na">Your challenge has been send!</h1>
                <Link to='/Garage'><button className="finishbtn">Back</button></Link>
            </div>
            :
            <div>
                {page(pvpState.opponentsel, opponentselect, pvpState, betinput)} 
            </div>
        }
        </>
    )
}

export default PvP