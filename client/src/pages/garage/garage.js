import React, {useEffect, useState} from 'react'
// import Cards from './cards'
import Slide from './slide'
import ScoreBoard from './scoreBoard'
// import Upgrades from './upgrades'
import Inventory from './inventory'
import Nav2 from '../../components/nav2'
import Player from '../../utils/player'

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
    useEffect(_ => {
        Player.getone('5d350ddd47c5e61d6838c6f2')
        .then (({data}) => {
            console.log(data)
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
    playerState.handleBuyItem = e => {
        let cost = parseInt(e.target.dataset.cost)
        if (cost > playerState.money){
            alert("You don't have enough money for this item")
        } else {
            let item = e.target.id
            let items = playerState.items
            items[e.target.dataset.i].amount = parseInt(e.target.value) + 1
            Player.putone(playerState.id, item, {[item]: parseInt(e.target.value) + 1})
            Player.updatebank(playerState.id, {bankAccount: playerState.money - cost})
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
            <ScoreBoard/>
            {/* <Cards /> */}
            <Slide />
            <Inventory items={playerState.items} PlayerId={playerState.id} money={playerState.money} handleBuyItem={playerState.handleBuyItem}/>
        </>
    )
}
export default Garage 