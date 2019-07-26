import React, {useEffect, useState} from 'react'
import Nav2 from '../../components/nav2'
import Selling from '../../utils/junkyard'
import basecars from '../../baseCars.json'
import Car from '../../utils/car'
import Player from '../../utils/player'
import './junkyard.css'
import { FaShoppingCart } from "react-icons/fa";

import { Card, Button } from 'react-bootstrap';

const Junkyard = props => {
    const [sellingState, setsellingState] = useState({
        basecars: [
            {
                carName: 'nsx',
                uid: localStorage.getItem('uid'),
                tire: 1,
                engine: 1,
                bodyKit: 1,
                value: 600,
                imageLink: basecars[0].stock,
                animation:  basecars[0].animation,
                selling: false
            },
            {
                carName: 'rx7',
                uid: localStorage.getItem('uid'),
                tire: 1,
                engine: 1,
                bodyKit: 1,
                value: 600,
                imageLink: basecars[1].stock,
                animation:  basecars[1].animation,
                selling: false
            },
            {
                carName: '3000gt',
                uid: localStorage.getItem('uid'),
                tire: 1,
                engine: 1,
                bodyKit: 1,
                value: 600,
                imageLink: basecars[2].stock,
                animation:  basecars[2].animation,
                selling: false
            },
            {
                carName: 's15',
                uid: localStorage.getItem('uid'),
                tire: 1,
                engine: 1,
                bodyKit: 1,
                value: 600,
                imageLink: basecars[3].stock,
                animation:  basecars[3].animation,
                selling: false
            },
            {
                carName: 'is300',
                uid: localStorage.getItem('uid'),
                tire: 1,
                engine: 1,
                bodyKit: 1,
                value: 600,
                imageLink: basecars[4].stock,
                animation:  basecars[4].animation,
                selling: false
            },
            {
                carName: 's2000',
                uid: localStorage.getItem('uid'),
                tire: 1,
                engine: 1,
                bodyKit: 1,
                value: 600,
                imageLink: basecars[5].stock,
                animation:  basecars[5].animation,
                selling: false
            }
        ],
        sellingcars: [],
        money: null
    })

    useEffect(_ =>{
        console.log(props.uid)
        Selling.getall()
        .then(({data}) => {
            let cars = data
            Player.getone(localStorage.getItem('_id'))
            .then(({data}) => setsellingState({...sellingState, sellingcars: cars, money: data.bankAccount}))
            .catch(e => console.error(e))
        })
        .catch(e => console.error(e))
    }, [])

    sellingState.handlepurchase = e => {
        let value = parseInt(e.target.value)
        if (value > sellingState.money) {
            alert('Not enough money!')
        } else {
            let money = sellingState.money - value
            let sellingcars = sellingState.sellingcars
            sellingcars.splice(parseInt(e.target.dataset.i), 1)
            Car.updateuid(e.target.id, {uid: props.uid})
            Car.updateselling(e.target.id, {selling: false})
            Car.buyused(e.target.id, {_id: localStorage.getItem('_id')})
            Player.updatebank(localStorage.getItem('_id'), {bankAccount: money})
            setsellingState({...sellingState, money, sellingcars})
        }
    }
    sellingState.handlebasepurchase = e => {
        let value = parseInt(e.target.value)
        if (value > sellingState.money) {
            alert('Not enough money!')
        } else {
            let money = sellingState.money - value
            let i = e.target.dataset.i
            let car = sellingState.basecars[i]
            // car.uid = props.uid
            Car.postone(car, {uid: props.uid})
            Player.updatebank(localStorage.getItem('_id'), {bankAccount: money})
            setsellingState({...sellingState, money})
        }
    }

    return (
        <>
        <Nav2 />
        <h1 className="sellingsub">Hot Car!</h1>
        {sellingState.sellingcars.map((car, index) =>(
            <div className='selling'>
                <img src={car.imageLink} className='sellingimg'/>
                <h1 className='sellingcap'>{car.carName} {car.bodyKit}</h1>
                <p className='sellingcap'>${car.value*.8}</p>
                <button className="sellingbtn" id={car._id} value={car.value*.8} data-i={index} onClick={sellingState.handlepurchase}>Purchase</button>
            </div>
        ))}
        <h1 className="sellingsub">Base Models</h1>
        {sellingState.basecars.map((car, index) =>(
            <div className='selling'>
                <img src={car.imageLink} className='sellingimg'/>
                <h1 className='sellingcap'>{car.carName} {car.bodyKit}</h1>
                <p className='sellingcap'>${car.value}</p>
                <button className="sellingbtn" value={car.value} data-i={index} onClick={sellingState.handlebasepurchase}>Purchase</button>
            </div>
        ))}
        </>
    )
}

export default Junkyard