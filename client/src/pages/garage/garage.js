import React from 'react'
// import Cards from './cards'
import Slide from './slide'
import ScoreBoard from './scoreBoard'
// import Upgrades from './upgrades'
import Inventory from './inventory'
import Nav2 from '../../components/nav2'


const Garage = _ => {


    return (
        <>
            <Nav2 />
            <ScoreBoard />
            {/* <Cards /> */}
            <Slide />
            <Inventory/>
        </>
    )
}
export default Garage 