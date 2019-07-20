import React from 'react'
// import Cards from './cards'
import Slide from './slide'
import Upgrades from './upgrades'
import Nav2 from '../../components/nav2'

const Garage = _ => {
    

    return (
        <>
            <Nav2 />
            <h1 style={{textAlign:'center', color: '#e97718', fontSize:'25px'}}>yourName's Inventory</h1>
            {/* <Cards /> */}
            <Slide/>
            {/* <Upgrades /> */}
        </>
    )
}
export default Garage 