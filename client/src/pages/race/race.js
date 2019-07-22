import React, {useEffect, useState, useRef} from 'react'
// import Cards from './cards'
import Slide from './slide'
import SlideLoc from './slideLoc'
import SlideItem from './slideItem'
// import RaceBet from '../../components/race'
import Car from '../../utils/car'
import grippyTire from '../../assets/tire.png'
import nitro from '../../assets/nitro.png'
import oil from '../../assets/oil.png'
import Nav2 from '../../components/nav2'
import Result from '../../components/result'

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
        bet: null,
        items: [],
        useItem: '',
        cpuE: null,
        cpuT: null,
        cpuK: null,
        logarr: [],
        cputotal: null,
        ptotal: null,
        prerace: true
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
            cpuT
    })}

    raceState.startrace= _ => {
        let ptotal = raceState.ptotal
        let cputotal = raceState.cputotal
        let logarr = []
        if (raceState.pengine > raceState.cpuE) {
            logarr.push('playername has better engine, playername pull ahead')
        } else {
            logarr.push('npcname start off strong, npcname pull ahead')
        }

        if (raceState.pbodyKit > raceState.cpuK) {
            logarr.push('looking GREAT playername!')
        } else {
            logarr.push('sorry npcname got the better style!')
        }
        
        if (raceState.ptire > raceState.cpuT) {
            logarr.push('playername speed up thanks to superior tires')
        } else {
            logarr.push('npcname speed increased, watch out!')
        }

        if (raceState.useItem !== "") {
            switch(raceState.useItem) {
                case 'oil spill':
                    logarr.push(`playername used ${raceState.useItem}, npcname got slowed!`, "We're coming up on the finish line!", "Who will be our winner..?!")
                    setraceState({
                        ...raceState,
                        bet: betinput.current.value,
                        cputotal: cputotal - .5,
                        logarr,
                        prerace: false
                    })
                    break;
                case 'nitro boost':
                    logarr.push(`playername used ${raceState.useItem} and increase speed by 5%`, "We're coming up on the finish line!", "Who will be our winner..?!")
                    setraceState({
                        ...raceState,
                        bet: betinput.current.value,
                        ptotal: ptotal + .8,
                        logarr,
                        prerace: false
                    })
                    break;
                case 'grippy tires':
                    logarr.push(`playername used ${raceState.useItem}, and increase speed by 2%`, "We're coming up on the finish line!", "Who will be our winner..?!")
                    setraceState({
                        ...raceState,
                        bet: betinput.current.value,
                        ptotal: ptotal + .4,
                        logarr,
                        prerace: false
                    })
                    break;
                default:
                    break;
            }
            console.log(logarr)
        }
        console.log(raceState)
    }
    raceState.itemSelect= e => {
        setraceState({ ...raceState, useItem: e.target.id})
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
            
            setraceState({...raceState, cars: data.cars, items})
    })
        .catch(e => console.error(e))
    }, [])    

    return (
        <>
        {raceState.prerace ? 
            <div>
            <Nav2 />
            <h1 style={{textAlign:'center', color: '#e97718', fontSize:'25px'}}>Select your car:</h1>
            <Slide cars={raceState.cars} carSelect={raceState.carSelect}/>
            <br />
            <br />
            <h1 style={{textAlign:'center', color: '#e97718', fontSize:'25px'}}>Select your item:</h1>
            <SlideItem items={raceState.items} itemSelect={raceState.itemSelect}/>
            <br />
            <br />
            <h1 style={{textAlign:'center', color: '#e97718', fontSize:'25px'}}>Select the track:</h1>
            <SlideLoc/>
            <br />
            <br />
            {/* <RaceBet /> */}
            <label htmlFor='bet'>Bet $</label>
            <input id='bet' type='text' ref={betinput} />
            <button onClick={raceState.startrace} >Race</button>
            </div>
            :
            <div>
                <Result log={raceState.logarr} ptotal={raceState.ptotal} cputotal={raceState.cputotal} />
            </div>
            
        }
            </>
    )
}
export default Race