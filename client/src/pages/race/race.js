import React, {useEffect, useState, useRef} from 'react'
// import Cards from './cards'
import Slide from './slide'
import SlideLoc from './slideLoc'
import SlideItem from './slideItem'
// import RaceBet from '../../components/race'
import Car from '../../utils/car'
// import grippyTire from '../../assets/tire.png'
// import nitro from '../../assets/nitro.png'
// import oil from '../../assets/oil.png'
import Nav2 from '../../components/nav2'
import Result from '../../components/result'
import Player from '../../utils/player'

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
const Race = _ => {
    const betinput = useRef()
    const [raceState, setraceState] = useState({
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
        itemImage: '',
        money: null
    })
        
    raceState.carSelect= e =>{
        let cpuE = parseFloat(cpuEngine(e.target.dataset.engine))
        let cpuT = parseFloat(cpuTires(e.target.dataset.tire))
        let cpuK = parseFloat(cpuKit(e.target.dataset.bodykit))
        setraceState({
            ...raceState,
            cputotal: cpuE + cpuT + cpuK,
            ptotal: parseInt(e.target.dataset.engine) + parseInt(e.target.dataset.tire) + parseInt(e.target.dataset.bodykit),
            pengine: e.target.dataset.engine,
            ptire: e.target.dataset.tire,
            pbodyKit: e.target.dataset.bodykit,
            cpuE,
            cpuK,
            cpuT,
            carimage: e.target.dataset.image,
            isCar: true
    })}

    raceState.startrace= _ => {
        if (betinput.current.value > raceState.money){
            alert('Bet exceed amout available!')
        } else if (raceState.isCar ) {
        let ptotal = raceState.ptotal
        let cputotal = raceState.cputotal
        let logarr = []
        if (raceState.pengine > raceState.cpuE) {
            logarr.push(`${raceState.username} has better engine, ${raceState.username} pull ahead`)
        } else {
            logarr.push('npc start off strong, npc pull ahead')
        }

        if (raceState.pbodyKit > raceState.cpuK) {
            logarr.push(`looking GREAT ${raceState.username}!`)
        } else {
            logarr.push('sorry npc got the better style!')
        }
        
        if (raceState.ptire > raceState.cpuT) {
            logarr.push(`${raceState.username} speed up thanks to superior tires`)
        } else {
            logarr.push('npc speed increased, watch out!')
        }

        if (raceState.useItem !== "") {
            switch(raceState.useItem) {
                case 'oil spill':
                    logarr.push(`${raceState.username} used ${raceState.useItem}, npc got slowed!`, "We're coming up on the finish line!", "Who will be our winner..?!")
                    cputotal -= .5
                    break;
                case 'nitro boost':
                    logarr.push(`${raceState.username} used ${raceState.useItem} and increase speed by 5%`, "We're coming up on the finish line!", "Who will be our winner..?!")
                    ptotal += .8
                    break;
                case 'grippy tires':
                    logarr.push(`${raceState.username} used ${raceState.useItem}, and increase speed by 2%`, "We're coming up on the finish line!", "Who will be our winner..?!")
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
                money: raceState.money - parseInt(betinput.current.value),
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
        console.log(raceState)
    }
    }
    raceState.itemSelect= e => {
        let items = raceState.items
        items[e.target.id].amount = parseInt(items[e.target.id].amount) - 1
        if (e.target.value === "oil spill") {
            Player.putone('5d350ddd47c5e61d6838c6f2', 'oil', {oil: items[e.target.id].amount})
        } else if (e.target.value === "nitro boost") {
            Player.putone('5d350ddd47c5e61d6838c6f2', 'nitro', {nitro: items[e.target.id].amount})
        } else if (e.target.value === "grippy tires") {
            Player.putone('5d350ddd47c5e61d6838c6f2', 'grippyTires', {grippyTires: items[e.target.id].amount})
        }
        setraceState({ 
            ...raceState,
            useItem: e.target.value,
            items,
            itemImage: e.target.dataset.image,
            isItem: true
        })
    }

    useEffect(_ =>{
        Car.getall('5d350ddd47c5e61d6838c6f2')
        .then(({data}) => {
            const items = [
                {
                    itemImage: grippyTire,
                    amount: data.grippyTires,
                    name: "grippy tires"
                },
                {
                    itemImage: oil,
                    amount: data.oil,
                    name: "oil spill"
                },
                {
                    itemImage: nitro,
                    amount: data.nitro,
                    name: "nitro boost"
                }
            ]
            
            setraceState({
                ...raceState, 
                cars: data.cars, 
                money: data.bankAccount, 
                items,
                username: data.userName
            })
    })
        .catch(e => console.error(e))
    }, [])    

    return (
        <>
        {raceState.prerace ? 
            <div>
                <Nav2 />
                {raceState.isCar ? <img src={raceState.carimage} /> : 
                    <div>
                        <h1 style={{textAlign:'center', color: '#e97718', fontSize:'25px'}}>Select your car:</h1>
                        <Slide cars={raceState.cars} carSelect={raceState.carSelect}/>
                        <br />
                    </div>
                }
                <br />
                {raceState.isItem ? <img src={raceState.itemImage} /> :
                    <div>
                        <h1 style={{textAlign:'center', color: '#e97718', fontSize:'25px'}}>Select your item:</h1>
                        <SlideItem items={raceState.items} itemSelect={raceState.itemSelect}/>
                        <br />
                    </div>
                }
                <br />
                {raceState.isLoc ? null :
                    <div>
                        <h1 style={{textAlign:'center', color: '#e97718', fontSize:'25px'}}>Select the track:</h1>
                        <SlideLoc/>
                        <br />
                    </div>
                }
                <br />
                {/* <RaceBet /> */}
                <label htmlFor='bet'>Bet $</label>
                <input id='bet' type='number' ref={betinput} placeholder="0"/>
                <p>Available ${raceState.money}</p>
                <button onClick={raceState.startrace} >Race</button>
            </div>
            :
            <div>
                <Result 
                log={raceState.logarr} 
                ptotal={raceState.ptotal} 
                cputotal={raceState.cputotal} 
                bet={raceState.bet} 
                money={raceState.money}
                carimage={raceState.carimage}
                />
            </div>
            
        }
            </>
    )
}
export default Race