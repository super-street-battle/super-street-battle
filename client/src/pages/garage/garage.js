import React, { useEffect, useState } from 'react'
// import Cards from './cards'
import Slide from './slide'
import ScoreBoard from './scoreBoard'
import Upgrades from './upgrades'
import Inventory from './inventory'
import Nav2 from '../../components/nav2'
import Player from '../../utils/player'
import model1 from '../../model1.json'
import model2 from '../../model2.json'
import model3 from '../../model3.json'
import model4 from '../../model4.json'
import model5 from '../../model5.json'
import model6 from '../../model6.json'
import Car from '../../utils/car'

const grippyTire = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852066775'
const oil = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852214573'
const nitro = 'https://super-street-battle.s3.us-west-1.amazonaws.com/1563852192955'


const Garage = _ => {
    const [playerState, setPlayerState] = useState({
        userName: '',
        money: null,
        cars: [],
        experience: null,
        items: [],
        imageLink: '',
        loss: null,
        win: null,
        tie: null,
        id: ''
    })

    // 5d350ddd47c5e61d6838c6f2

    useEffect(_ => {
        Player.getone(localStorage.getItem('_id'))
            .then(({ data }) => {
                setPlayerState({
                    ...playerState,
                    userName: data.userName,
                    money: data.bankAccount,
                    cars: data.cars,
                    experience: data.experience,
                    items: [
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
                    ],
                    imageLink: data.imageLink,
                    loss: data.loss,
                    win: data.win,
                    tie: data.tie,
                    id: data._id
                })
            })
            .catch(e => console.log(e))
    }, [])


    playerState.handleBodyKit = e => {
        console.log(e.target.id)
        let i = parseInt(e.target.id)
        let cars = playerState.cars
        let cost = parseInt(e.target.value)
        if (playerState.cars[i].bodyKit >= 3 || playerState.money < cost) {
            alert('Cannot upgrade')
        } else {
            cars[i].bodyKit = cars[i].bodyKit + 1
            setPlayerState({...playerState, cars})
            switch (playerState.cars[i].bodyKit) {
                case 2:
                    switch (playerState.cars[i].carName) {
                        case "nsx":
                            cars[i].imageLink = model1[0]
                            // setPlayerState({...playerState, cars})
                            break;
                        case "rx7":
                            cars[i].imageLink = model2[0]
                            // setPlayerState({...playerState, cars})
                            break;
                        case "3000gt":
                                cars[i].imageLink = model3[0]
                                // setPlayerState({...playerState, cars})
                            break;
                        case "s15":
                                cars[i].imageLink = model4[0]
                                // setPlayerState({...playerState, cars})
                            break;
                        case "is300":
                                cars[i].imageLink = model5[0]
                                // setPlayerState({...playerState, cars})
                            break;
                        case "s2000":
                                cars[i].imageLink = model6[0]
                                // setPlayerState({...playerState, cars})
                            break;
                        default:
                            break;
                    }
                    break;
                case 3: 
                    switch (playerState.cars[i].carName) {
                        case "nsx":
                                cars[i].imageLink = model1[1]
                                // setPlayerState({...playerState, cars})
                                break;
                            case "rx7":
                                cars[i].imageLink = model2[1]
                                // setPlayerState({...playerState, cars})
                                break;
                            case "3000gt":
                                    cars[i].imageLink = model3[1]
                                    // setPlayerState({...playerState, cars})
                                break;
                            case "s15":
                                    cars[i].imageLink = model4[1]
                                    // setPlayerState({...playerState, cars})
                                break;
                            case "is300":
                                    cars[i].imageLink = model5[1]
                                    // setPlayerState({...playerState, cars})
                                break;
                            case "s2000":
                                    cars[i].imageLink = model6[1]
                                    // setPlayerState({...playerState, cars})
                                break;
                            default:
                                break;
                    }
                    break;
                default:
                    break;
            }
            setPlayerState({...playerState, cars, money: playerState.money - cost})
            Car.updatebody(cars[i]._id, {bodyKit: playerState.cars[i].bodyKit})
            Car.updateimage(cars[i]._id, {imageLink: playerState.cars[i].imageLink})
            Player.updatebank(playerState.id, { bankAccount: playerState.money - cost})
        }
    }

    playerState.handleBuyItem = e => {
        let cost = parseInt(e.target.dataset.cost)
        if (cost > playerState.money) {
            alert("You don't have enough money for this item")
        } else {
            let item = e.target.id
            let items = playerState.items
            items[e.target.dataset.i].amount = parseInt(e.target.value) + 1
            Player.putone(playerState.id, item, { [item]: parseInt(e.target.value) + 1 })
            Player.updatebank(playerState.id, { bankAccount: playerState.money - cost })
            setPlayerState({
                ...playerState,
                items,
                money: playerState.money - cost
            })
        }
    }


    return (
        <>
            <Nav2 />
            <ScoreBoard items={playerState.items} info={playerState} playerId={playerState.id} money={playerState.money} />
            {/* <Cards /> */}
            <Slide info={playerState} handleBodyKit={playerState.handleBodyKit} />
            <Inventory items={playerState.items} PlayerId={playerState.id} money={playerState.money} handleBuyItem={playerState.handleBuyItem} />
        </>
    )
}
export default Garage 