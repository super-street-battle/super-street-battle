import React, {useState, useEffect} from 'react'
import Slide from '../challenges/slide'
import SlideItem from '../challenges/slideItem'
import Car from '../../utils/car'
import Player from '../../utils/player'
import Result from '../result'
import Results from '../../utils/result'
import Challenges from '../../utils/challenges'

const grippyTire = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852066775'
const oil = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852214573'
const nitro = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852192955'

const sendresult = (acceptState, ptotal, ototal, logarr) => {
    let result = {
        sender: acceptState.username,
        ptotal: ototal,
        ototal: ptotal,
        receiver: acceptState.challenge.sender,
        log: logarr,
        animation: acceptState.challenge.animation
    }
    Results.postone(result)
}

const Accept = props => {
    const [acceptState, setacceptState] = useState({
        challenge: props.challenge,
        isCar: false,
        isItem: false,
        cars: [],
        items: [],
        pengine: null,
        pbodyKit: null,
        ptire: null,
        useItem: '',
        ptotal: null,
        caranimation: [],
        id: '',
        money: null, 
        win: null,
        loss: null,
        tie: null,
        username: '',
        experience: null,
        logarr: [],
        isStart: false,
        ototal: null,
        oname: props.challenge.sendername
    })

    const [opponentState, setopponentState] = useState({
        opponent: {}
    })
    useEffect(_ => {
        Player.getone(acceptState.challenge.sender)
        .then(({data}) => {setopponentState({opponent: data})})
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
                    
            setacceptState({
                ...acceptState,
                id: data._id,
                cars: data.cars, 
                money: data.bankAccount, 
                items,
                win: data.win,
                loss: data.loss,
                tie: data.tie,
                username: data.userName,
                experience: data.experience,
            })
        })
        .catch(e => console.error(e))
    }, [])

    acceptState.carSelect= e =>{
        setacceptState({
            ...acceptState,
            ptotal: parseFloat(e.target.dataset.engine) + parseFloat(e.target.dataset.tire) + parseFloat(e.target.dataset.bodykit),
            pengine:parseFloat( e.target.dataset.engine),
            ptire: parseFloat(e.target.dataset.tire),
            pbodyKit: parseFloat(e.target.dataset.bodykit),
            caranimation: e.target.dataset.animation,
            isCar: true
        })
    }

    acceptState.itemSelect= e => {
        let items = acceptState.items
        items[e.target.id].amount = parseInt(items[e.target.id].amount) - 1
        if (e.target.value === "oil") {
            Player.putone(localStorage.getItem('_id'), 'oil', {oil: items[e.target.id].amount})
        } else if (e.target.value === "nitro") {
            Player.putone(localStorage.getItem('_id'), 'nitro', {nitro: items[e.target.id].amount})
        } else if (e.target.value === "grippyTires") {
            Player.putone(localStorage.getItem('_id'), 'grippyTires', {grippyTires: items[e.target.id].amount})
        }
        setacceptState({ 
            ...acceptState,
            useItem: e.target.value,
            items,
            isItem: true
        })
    }

    acceptState.handlepurchase = e => {
        if (acceptState.money < e.target.value) {
            alert('Not enough cash for this item!')
        } else {
            let cost = parseInt(e.target.value)
            let item = e.target.id
            let items = acceptState.items
            items[e.target.dataset.i].amount = parseInt(e.target.dataset.amount) + 1
            Player.putone(acceptState.id, item, {[item]: parseInt(e.target.dataset.amount) + 1})
            Player.updatebank(acceptState.id, {bankAccount: acceptState.money - cost})
            setacceptState({
                ...acceptState,
                items,
                money: acceptState.money - cost
            })
            
        }
    }

    acceptState.start = e => {
        // let result = {
        //     sender: acceptState.username,
        //     ptotal: acceptState.ototal,
        //     ototal: acceptState.ptotal,
        //     receiver: acceptState.challenge.sender,
        //     log: acceptState.logarr,
        //     animation: acceptState.challenge.animation
        // }
        if (acceptState.isCar === false) {
            alert('Please select your car.')
        } else {
            // Results.postone(result)
            Challenges.deleteone(acceptState.challenge._id)
            switch (acceptState.challenge.location.part) {
                case 'bodykit':
                    if (acceptState.pbodyKit > acceptState.challenge.pbodyKit) {
                        let res = acceptState.pbodyKit + parseFloat(acceptState.challenge.location.point)
                        let ptotal = acceptState.ptotal + parseFloat(acceptState.challenge.location.point)
                        setacceptState({...acceptState, pbodyKit: res, ptotal})
                    } else if (acceptState.pbodyKit < acceptState.challenge.pbodyKit) {
                        let challenge = acceptState.challenge
                        let res = acceptState.challenge.pbodyKit + parseFloat(acceptState.challenge.location.point)
                        challenge.pbodyKit = res
                        challenge.ptotal = challenge.ptotal + parseFloat(acceptState.challenge.location.point)
                        setacceptState({...acceptState, challenge})
                    } 
                    break;
                case 'engine':
                    if (acceptState.pengine > acceptState.challenge.pengine) {
                        let res = acceptState.pengine + parseFloat(acceptState.challenge.location.point)
                        let ptotal = acceptState.ptotal + parseFloat(acceptState.challenge.location.point)
                        setacceptState({...acceptState, pengine: res, ptotal})
                    } else if (acceptState.pengine < acceptState.challenge.pengine) {
                        let challenge = acceptState.challenge
                        let res = acceptState.challenge.pengine + parseFloat(acceptState.challenge.location.point)
                        challenge.pengine = res
                        challenge.ptotal = challenge.ptotal + parseFloat(acceptState.challenge.location.point)
                        setacceptState({...acceptState, challenge})
                    }
                    break;
                case 'tires':
                    if (acceptState.ptire > acceptState.challenge.ptire) {
                        let res = acceptState.ptire + parseFloat(acceptState.challenge.location.point)
                        let ptotal = acceptState.ptotal + parseFloat(acceptState.challenge.location.point)
                        setacceptState({...acceptState, ptire: res, ptotal})
                    } else if (acceptState.ptire < acceptState.challenge.ptire) {
                        let challenge = acceptState.challenge
                        let res = acceptState.challenge.ptire + parseFloat(acceptState.challenge.location.point)
                        challenge.ptire = res
                        challenge.ptotal = challenge.ptotal + parseFloat(acceptState.challenge.location.point)
                        setacceptState({...acceptState, challenge})
                    }
                    break;
                default:
                    break;
            }
            let logarr = []
            if (acceptState.pengine > acceptState.challenge.pengine) {
                logarr.push(`${acceptState.username} have a better engine, so ${acceptState.username} pull ahead!`)
            } else if (acceptState.pengine < acceptState.challenge.pengine){
                logarr.push(`${acceptState.oname} starts off strong, ${acceptState.oname} pulls ahead!`)
            } else if (acceptState.pengine === acceptState.challenge.pengine) {
                logarr.push(`You starts off super strong!`)
            }
            let ptotal = acceptState.ptotal
            let ototal = acceptState.challenge.ptotal

            if (acceptState.useItem !== "") {
                switch(acceptState.useItem) {
                    case 'oil':
                        logarr.push(`${acceptState.oname} slowed down from ${acceptState.username}'s oil spill!`)
                        ototal -= .5
                        break;
                    case 'nitro':
                        logarr.push(`${acceptState.username} speed increased by 5% from using nitro boost!`)
                        ptotal += .8
                        break;
                    case 'grippyTires':
                        logarr.push(`${acceptState.username} speed increased by 2% from using grippy tires!`)
                        ptotal += .4
                        break;
                    default:
                        break;
                }
            } 
    
            if (acceptState.pbodyKit > acceptState.challenge.pbodyKit) {
                logarr.push(`looking GREAT ${acceptState.username}!`)
            } else if (acceptState.pbodyKit < acceptState.challenge.pbodyKit) {
                logarr.push(`${acceptState.oname} has a better kit, points for style!`)
            } else if (acceptState.pbodyKit === acceptState.challenge.pbodyKit) {
                logarr.push(`You're looking GREAT!`)
            }
            
            if (acceptState.ptire > acceptState.challenge.ptire) {
                logarr.push(`${acceptState.username} speed went up thanks to superior tires`)
            } else if (acceptState.ptire < acceptState.challenge.ptire) {
                logarr.push(`${acceptState.oname}'s speed increased, watch out!`)
            } else if (acceptState.ptire === acceptState.challenge.ptire) {
                logarr.push(`Both drivers are neck to neck!`)
            }
    
            if (acceptState.challenge.item !== "") {
                switch(acceptState.challenge.item) {
                    case 'oil':
                        logarr.push(`${acceptState.oname} used oil spill, ${acceptState.username} slowed down!`, "We're coming up on the finish line!", "Who will be our winner..?!")
                        ptotal -= .5
                        break;
                    case 'nitro':
                        logarr.push(`${acceptState.oname} used nitro boost and increased the speed by 5%`, "We're coming up on the finish line!", "Who will be our winner..?!")
                        ototal += .8
                        break;
                    case 'grippyTires':
                        logarr.push(`${acceptState.oname} used grippy tires, and increased the speed by 2%`, "We're coming up on the finish line!", "Who will be our winner..?!")
                        ototal += .4
                        break;
                    default:
                        break;
                }
            } else {
                logarr.push("We're coming up on the finish line!", "Who will be our winner..?!")
            }  

            let bet = acceptState.challenge.bet
            let challenge = acceptState.challenge
            challenge.ptotal = ototal
            if(ptotal > ototal){
                sendresult(acceptState, ptotal, ototal, logarr)
                Player.updateloss(acceptState.challenge.sender, {loss: opponentState.opponent.loss + 1})
                Player.updatebank(acceptState.id, {bankAccount: acceptState.money + bet})
                .then(_ => {
                    Player.updateexperience(acceptState.id, {experience: acceptState.experience + 5})
                    .then(_ => {
                        Player.updatewin(acceptState.id, {win: acceptState.win + 1})
                        .then(_ =>{
                            setacceptState({...acceptState, logarr, ptotal, challenge, isStart: true, ototal})
                        })
                    })
                })
            } else if (ptotal < ototal) {
                sendresult(acceptState, ptotal, ototal, logarr)
                Player.updatewin(acceptState.challenge.sender, {win: opponentState.opponent.win + 1})
                .then(_ => console.log('win'))
                Player.updateexperience(acceptState.challenge.sender, {experience: opponentState.opponent.experience + 5})
                .then(_ => console.log('exp'))
                Player.updatebank(acceptState.challenge.sender, {bankAccount: opponentState.opponent.bankAccount + (bet*2)})
                .then(_ => console.log('money'))
                Player.updateloss(acceptState.id, {loss: acceptState.loss + 1})
                .then(_ => {
                    Player.updatebank(acceptState.id, {bankAccount: acceptState.money - bet})
                    .then(_ => {
                        setacceptState({...acceptState, logarr, ptotal, challenge, isStart: true, ototal})
                    })
                })
            } else if (ptotal === ototal) {
                sendresult(acceptState, ptotal, ototal, logarr)
                Player.updatetie(acceptState.challenge.sender, {tie: opponentState.opponent.tie + 1})
                Player.updateexperience(acceptState.challenge.sender, {experience: opponentState.opponent.experience + 2})
                Player.updateexperience(acceptState.id, {experience: acceptState.experience + 2})
                .then(_ => {
                    Player.updatetie(acceptState.id, {tie: acceptState.tie + 1})
                    .then(_ => {
                        Player.updatebank(acceptState.id, {bankAccount: acceptState.money - bet})
                        .then(_ => {
                            setacceptState({...acceptState, logarr, ptotal, challenge, isStart: true, ototal})
                        })
                    })
                })
            }
        }
    }

    return (
        <>
            {acceptState.isStart ? 
                <>
                    <Result state={acceptState}/>
                </>
                :
                <>
                    {acceptState.isCar ? null : 
                        <div>
                            <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginTop:'7%'}}>Select your car:</h1>
                            <Slide cars={acceptState.cars} carSelect={acceptState.carSelect}/>
                            <br />
                        </div>
                    }
                    <br />
                    {acceptState.isItem ? null :
                        <div>
                            <h1 style={{textAlign:'center', color: '#e97718', fontSize:'19px', marginTop:'2%'}}>Select your item:</h1>
                            <SlideItem items={acceptState.items} itemSelect={acceptState.itemSelect} handlepurchase={acceptState.handlepurchase} />
                            <br />
                        </div>
                    }
                    <button className="racebtn" onClick={acceptState.start}>Race!</button>
                </>
            }
        </>
    )
}

export default Accept