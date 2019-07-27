import React, {useEffect, useState, useRef} from 'react'
import Slide from './slide'
import SlideLoc from './slideLoc'
import SlideItem from './slideItem'
import Car from '../../utils/car'
import Nav2 from '../../components/nav2'
import Result from '../../components/result'
import Player from '../../utils/player'
import tracks from '../../raceTrack.json'
import './race.css'

const grippyTire = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852066775'
const oil = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852214573'
const nitro = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852192955'

const cpuEngine = pengine => {
    let max = parseInt(pengine) + 1
    let min = parseInt(pengine) - 1
    return (Math.random() * (max - min) + min).toFixed(1)
}
    
const cpuTires = ptire => {
    let max = parseInt(ptire) + 1
    let min = parseInt(ptire) - 1
    return (Math.random() * (max - min) + min).toFixed(1)
}
    
const cpuKit = pbodyKit => {
    let max = parseInt(pbodyKit) + 1
    let min = parseInt(pbodyKit) - 1
    return (Math.random() * (max - min) + min).toFixed(1)
}

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

const Race = _ => {

    const betinput = useRef()
    
    const [raceState, setraceState] = useState({
        id: '',
        cars: [],
        pengine: null,
        ptire: null,
        pbodyKit: null,
        bet: 0,
        items: [],
        useItem: '',
        cpuE: null,
        cpuT: null,
        cpuK: null,
        logarr: [],
        cputotal: null,
        ptotal: null,
        prerace: true,
        isCar: false,
        isItem: false,
        isLoc: false,
        carimage: '',
        caranimation: [],
        itemImage: '',
        money: null,
        tracks: [],
        win: null,
        loss: null,
        tie: null,
        experience: null
    })
        
    raceState.carSelect= e =>{
        let cpuE = parseFloat(cpuEngine(e.target.dataset.engine))
        let cpuT = parseFloat(cpuTires(e.target.dataset.tire))
        let cpuK = parseFloat(cpuKit(e.target.dataset.bodykit))
        setraceState({
            ...raceState,
            cputotal: cpuE + cpuT + cpuK,
            ptotal: parseFloat(e.target.dataset.engine) + parseFloat(e.target.dataset.tire) + parseFloat(e.target.dataset.bodykit),
            pengine:parseFloat( e.target.dataset.engine),
            ptire: parseFloat(e.target.dataset.tire),
            pbodyKit: parseFloat(e.target.dataset.bodykit),
            cpuE,
            cpuK,
            cpuT,
            carimage: e.target.dataset.image,
            caranimation: e.target.dataset.animation,
            isCar: true
    })}

    raceState.startrace = _ => {
        if (betinput.current.value > raceState.money){
            alert('Bet exceed amout available!')
        } else if (raceState.isCar && raceState.isLoc ) {
        let ptotal = raceState.ptotal
        let cputotal = raceState.cputotal
        let logarr = []
        if (raceState.pengine > raceState.cpuE) {
            logarr.push(`You have a better engine, so you pull ahead!`)
        } else {
            logarr.push('Takumi starts off strong, Takumi pulls ahead!')
        }

        if (raceState.pbodyKit > raceState.cpuK) {
            logarr.push(`You're looking GREAT!`)
        } else {
            logarr.push('Takumi has a better kit, points for style!')
        }
        
        if (raceState.ptire > raceState.cpuT) {
            logarr.push(`Your speed went up thanks to superior tires`)
        } else {
            logarr.push(`Takumi's speed increased, watch out!`)
        }

        if (raceState.useItem !== "") {
            switch(raceState.useItem) {
                case 'oil':
                    logarr.push(`You used ${raceState.useItem}, Takumi slowed down!`, "We're coming up on the finish line!", "Who will be our winner..?!")
                    cputotal -= .5
                    break;
                case 'nitro':
                    logarr.push(`You used ${raceState.useItem} and increased the speed by 5%`, "We're coming up on the finish line!", "Who will be our winner..?!")
                    ptotal += .8
                    break;
                case 'grippyTires':
                    logarr.push(`You used ${raceState.useItem}, and increased the speed by 2%`, "We're coming up on the finish line!", "Who will be our winner..?!")
                    ptotal += .4
                    break;
                default:
                    break;
            }
        } else {
            logarr.push("We're coming up on the finish line!", "Who will be our winner..?!")
        }
        if (betinput.current.value !== '') {
            setraceState({
                ...raceState,
                bet: parseInt(betinput.current.value),
                logarr,
                cputotal,
                ptotal,
                prerace: false
            })
        } else {
            setraceState({
                ...raceState,
                bet: 0,
                logarr,
                cputotal,
                ptotal,
                prerace: false
            })
        }
    }
    }
    raceState.itemSelect= e => {
        let items = raceState.items
        items[e.target.id].amount = parseInt(items[e.target.id].amount) - 1
        if (e.target.value === "oil") {
            Player.putone(localStorage.getItem('_id'), 'oil', {oil: items[e.target.id].amount})
        } else if (e.target.value === "nitro") {
            Player.putone(localStorage.getItem('_id'), 'nitro', {nitro: items[e.target.id].amount})
        } else if (e.target.value === "grippyTires") {
            Player.putone(localStorage.getItem('_id'), 'grippyTires', {grippyTires: items[e.target.id].amount})
        }
        setraceState({ 
            ...raceState,
            useItem: e.target.value,
            items,
            itemImage: e.target.dataset.image,
            isItem: true
        })
    }
    raceState.trackselect = e => {
        if (raceState.isCar) {
            switch (e.target.id) {
                case 'bodykit':
                    if (raceState.pbodyKit > raceState.cpuK) {
                        let res = raceState.pbodyKit + parseFloat(e.target.value)
                        setraceState({...raceState, pbodyKit: res, isLoc: true})
                    } else if (raceState.pbodyKit < raceState.cpuK) {
                        let res = raceState.cpuK + parseFloat(e.target.value)
                        setraceState({...raceState, cpuK: res, isLoc: true})
                    }
                    break;
                case 'engine':
                    if (raceState.pengine > raceState.cpuE) {
                        let res = raceState.pengine + parseFloat(e.target.value)
                        setraceState({...raceState, pengine: res, isLoc: true})
                    } else if (raceState.pengine < raceState.cpuE) {
                        let res = raceState.cpuE + parseFloat(e.target.value)
                        setraceState({...raceState, cpuE: res, isLoc: true})
                    }
                    break;
                case 'tires':
                    if (raceState.ptire > raceState.cpuT) {
                        let res = raceState.ptire + parseFloat(e.target.value)
                        setraceState({...raceState, ptire: res, isLoc: true})
                    } else if (raceState.ptire < raceState.cpuT) {
                        let res = raceState.cpuT + parseFloat(e.target.value)
                        setraceState({...raceState, cpuT: res, isLoc: true})
                    }
                    break;
                default:
                    break;
            }
        } else {
            alert('Please select your car')
        }
    }
    useEffect(_ =>{
        let tracks = rantracks()
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
            
            setraceState({
                ...raceState,
                id: data._id,
                cars: data.cars, 
                money: data.bankAccount, 
                items,
                tracks,
                win: data.win,
                loss: data.loss,
                tie: data.tie,
                username: data.userName,
                experience: data.experience
            })
    })
        .catch(e => console.error(e))
    }, [])    

    raceState.handlepurchase = e => {
        if (raceState.money < e.target.value) {
            alert('Not enough cash for this item!')
        } else {
            let cost = parseInt(e.target.value)
            let item = e.target.id
            let items = raceState.items
            items[e.target.dataset.i].amount = parseInt(e.target.dataset.amount) + 1
            Player.putone(raceState.id, item, {[item]: parseInt(e.target.dataset.amount) + 1})
            Player.updatebank(raceState.id, {bankAccount: raceState.money - cost})
            setraceState({
                ...raceState,
                items,
                money: raceState.money - cost
            })
            
        }
    }

    return (
        <>
        {raceState.prerace ? 
            <div>
                <Nav2 />
                {raceState.isCar ? null : 
                    <div>
                        <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginTop:'7%'}}>Select your car:</h1>
                        <Slide cars={raceState.cars} carSelect={raceState.carSelect}/>
                        <br />
                    </div>
                }
                <br />
                {raceState.isItem ? null :
                    <div>
                        <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginTop:'2%'}}>Select your item:</h1>
                        <SlideItem items={raceState.items} itemSelect={raceState.itemSelect} handlepurchase={raceState.handlepurchase} />
                        <br />
                    </div>
                }
                <br />
                {raceState.isLoc ? null :
                    <div>
                        <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginTop:'2%'}}>Select the track:</h1>
                        <SlideLoc tracks={raceState.tracks} trackselect={raceState.trackselect}/>
                        <br />
                    </div>
                }
                <br />
                {/* <RaceBet /> */}
                <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginBottom:'4%'}}>Place your bet!</h1>
                <div className="bets">
                    <label htmlFor='bet'>$</label>
                    <input id='bet' type='number' ref={betinput} placeholder="0"/>
                </div>
                <p>Max bet ${raceState.money}</p>
                <button className="racebtn" onClick={raceState.startrace} >Race</button>
            </div>
            :
            <div>
                <Result 
                // log={raceState.logarr} 
                // ptotal={raceState.ptotal} 
                // cputotal={raceState.cputotal} 
                // bet={raceState.bet} 
                // money={raceState.money}
                // carimage={raceState.carimage}
                // id={raceState.id}
                state={raceState}
                />
            </div>
            
        }
            </>
    )
}
export default Race