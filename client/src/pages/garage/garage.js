import React from 'react'
// import Cards from './cards'
import Slide from './slide'
import ScoreBoard from './scoreBoard'
// import Upgrades from './upgrades'
import Inventory from './inventory'


const Garage = _ => {


    return (
        <>
            <ScoreBoard />
            {/* <Cards /> */}
            <Slide />
            <Inventory/>
        </>
    )
}
export default Garage 