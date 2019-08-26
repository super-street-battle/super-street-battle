import React, {useEffect, useState, useRef} from 'react'
import './race.css'
import { Carousel, Container, Tabs, Tab } from 'react-bootstrap'
import Challenge from '../../components/challenges'
import Nav2 from '../../components/nav2'
import PvP from '../../components/pvp'

const Race = props => {
    return (
        <>
            <Nav2 />
            <Tabs defaultActiveKey="2-players" id="uncontrolled-tab-example">
                <Tab eventKey="2-players" title="2-players">
                    <PvP />         
                </Tab>
                <Tab eventKey="1-player" title="1-player">
                    <Challenge />         
                </Tab>
            </Tabs>
        </>
    )
}
export default Race