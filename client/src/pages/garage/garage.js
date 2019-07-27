import React, { useEffect, useState } from 'react'
import Slide from './slide'
import ScoreBoard from './scoreBoard'
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
let costs = []
let ecosts = []

const tireprice = data => {
    data.cars.forEach(car => {
        costs.push(car.tire * 25)
    })
}
const engineprice = data => {
    data.cars.forEach(car => {
        ecosts.push(car.engine * 25)
    })
}

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
        //         enginePrice: null,
        //         tirePrice: null 
    })

    useEffect(_ => {
        Player.getone(localStorage.getItem('_id'))
            .then(({ data }) => {
                tireprice(data)
                engineprice(data)
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
                    id: data._id,
                    tireprice: costs,
                    engineprice: ecosts
                })
            })
            .catch(e => console.log(e))
    }, [])


    playerState.handleTire = e => {
        // grabs car array
        let i = parseInt(e.target.id)
        //grabs the clicked car
        let cars = playerState.cars
        let cost = parseInt(e.target.value)
        let tireprice = playerState.tireprice
        if (playerState.money < cost) {
            alert('Cannot Upgrade')
        } else {
            cars[i].tire = cars[i].tire + 1
            tireprice.splice(i, 1, cars[i].tire * 25)
            console.log(tireprice.splice(i, 1, cars[i].tire * 25))
            // setPlayerState({...playerState, cars})

            setPlayerState({ ...playerState, cars, money: playerState.money - cost, tireprice })
            Player.updatebank(playerState.id, { bankAccount: playerState.money - cost })
            Car.updatetires(cars[i]._id, { tire: cars[i].tire })
            // console.log(playerState.cars[i].engine)

            //increment price everytime they buy i product
            // setPlayerState({...playerState, cars, tirePrice: playerState.tirePrice + 50})

        }

    }

    playerState.handleEngine = e => {
        console.log(playerState.engineprice)
        // grabs car array
        let i = parseInt(e.target.id)
        //grabs the clicked car
        let cars = playerState.cars
        let cost = parseInt(e.target.value)
        let engineprice = playerState.engineprice
        if (playerState.money < cost) {
            alert('Cannot Upgrade')
        } else {
            cars[i].engine = cars[i].engine + 1
            engineprice.splice(i, 1, cars[i].engine * 25)
            // console.log(engineprice.splice(i, 1, cars[i].engine * 25))
            // setPlayerState({...playerState, cars})

            setPlayerState({ ...playerState, cars, money: playerState.money - cost, engineprice })
            Player.updatebank(playerState.id, { bankAccount: playerState.money - cost })
            Car.updateengine(cars[i]._id, { engine: cars[i].engine })
            // console.log(playerState.cars[i].engine)

            //increment price everytime they buy i product
            // setPlayerState({...playerState, cars, tirePrice: playerState.tirePrice + 50})

        }
    }





    playerState.handleBodyKit = e => {
        let i = parseInt(e.target.id)
        let cars = playerState.cars
        let cost = parseInt(e.target.value)
        if (playerState.cars[i].bodyKit >= 3 || playerState.money < cost) {
            alert('Cannot Upgrade')
        } else {
            cars[i].bodyKit = cars[i].bodyKit + 1
            cars[i].value = cars[i].value + (cost * .7)
            setPlayerState({...playerState, cars})
            switch (playerState.cars[i].bodyKit) {
                case 2:
                    switch (playerState.cars[i].carName) {
                        case "nsx":
                            cars[i].imageLink = model1[0].image
                            cars[i].animation = model1[0].animation
                            break;
                        case "rx7":
                            cars[i].imageLink = model2[0].image
                            cars[i].animation = model2[0].animation
                            break;
                        case "3000gt":
                                cars[i].imageLink = model3[0].image
                                cars[i].animation = model3[0].animation
                                break;
                        case "s15":
                                cars[i].imageLink = model4[0].image
                                cars[i].animation = model4[0].animation
                                break;
                        case "is300":
                                cars[i].imageLink = model5[0].image
                                cars[i].animation = model5[0].animation
                                break;
                        case "s2000":
                                cars[i].imageLink = model6[0].image
                                cars[i].animation = model6[0].animation
                                break;
                        default:
                            break;
                    }
                    break;
                case 3:
                    switch (playerState.cars[i].carName) {
                        case "nsx":
                                cars[i].imageLink = model1[1].image
                                cars[i].animation = model1[1].animation
                                    break;
                            case "rx7":
                                cars[i].imageLink = model2[1].image
                                cars[i].animation = model2[1].animation
                                    break;
                            case "3000gt":
                                    cars[i].imageLink = model3[1].image
                                    cars[i].animation = model3[1].animation
                                        break;
                            case "s15":
                                    cars[i].imageLink = model4[1].image
                                    cars[i].animation = model4[1].animation
                                        break;
                            case "is300":
                                    cars[i].imageLink = model5[1].image
                                    cars[i].animation = model5[1].animation
                                        break;
                            case "s2000":
                                    cars[i].imageLink = model6[1].image
                                    cars[i].animation = model6[1].animation
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
            Car.updateanimation(cars[i]._id, {animation: playerState.cars[i].animation})
            Car.updatevalue(cars[i]._id, { value: playerState.cars[i].value})
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

    playerState.sellcar = e => {
        let cars = playerState.cars
        let i = parseInt(e.target.value)
        let price = parseInt(e.target.dataset.price)
        Car.updateuid(e.target.id, {uid: ''})
        Car.updateselling(e.target.id, {selling: true})
        Player.updatebank(playerState.id, { bankAccount: playerState.money + (price*.6) })
        Player.removecar(playerState.id, e.target.id)
        cars.splice(i, 1)
        setPlayerState({...playerState, cars, money: playerState.money + (price*.6)})
    }



return (

    <>
        <Nav2 />
        <ScoreBoard items={playerState.items} info={playerState} playerId={playerState.id} money={playerState.money} />
        {/* <Cards /> */}
        <Slide info={playerState} handleBodyKit={playerState.handleBodyKit}  />
        <Inventory prices={playerState} items={playerState.items} PlayerId={playerState.id} money={playerState.money} handleBuyItem={playerState.handleBuyItem} />
    </>
)

    }
export default Garage