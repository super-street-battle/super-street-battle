import React, {useEffect, useState} from 'react'
import './home.css'
import Nav2 from '../../components/nav2'
import { Tabs, Tab } from 'react-bootstrap'
import Player from '../../utils/player'
import PvP from '../../components/pvp'
import Rchallenges from '../../components/recievedchallenge'
import Challengeres from '../../components/challengeres'
import { IoIosArrowBack } from "react-icons/io";

const page = playersState => {
  if (playersState.PvP) {
    return (
      <>
        <Nav2 />
        <button className="backbtn" onClick={playersState.isPvP}><IoIosArrowBack /></button>
        <PvP _id={playersState.challenged} />
      </>
    )
  } else {
    return (
      <>
        <Nav2 />
        <Tabs defaultActiveKey="topplayers" id="uncontrolled-tab-example">
          <Tab eventKey="topplayers" title="Top10">       
            <div className="homepage">
              <div className="topcontainer">
              {playersState.topplayers.map(({userName, experience, _id}, index) => (
                <div>
                  <h1 className="topplayer">{index+1}. {userName} - {experience}</h1>
                  {_id === localStorage.getItem('_id') ? null :
                  <button className="challengebtn" onClick={playersState.isPvP} id={_id}>Challenge</button>
                }
                </div>
              ))}
              </div>
            </div>
          </Tab>
          <Tab className="subtabs" eventKey="challenges" title="Challenges">
              <Rchallenges />         
          </Tab>
          <Tab className="subtabs" eventKey="results" title="Results">
              <Challengeres />         
          </Tab>
      </Tabs>
      </>
    )
  }
}

const Home = _ => {
  const [ playersState, setplayersState ] = useState({
    topplayers: [],
    PvP: false,
    challenged: null
  })

  useEffect( _ => {
    Player.get10()
    .then(({data}) => {
      setplayersState({ ...playersState, topplayers: data })
    })
    .catch(e => console.error(e))
  }, [])

  playersState.isPvP = e => {
    setplayersState({...playersState, PvP: !playersState.PvP, challenged: e.target.id})
  }

    return (
      <>
        {/* <Nav2 /> */}
        {/* <div className="homepage">
          <h1 className="subtitle">Top Players</h1>
          <div className="topcontainer">
          {playersState.topplayers.map(({userName, experience, _id}, index) => (
            <div>
              <h1 className="topplayer">{index+1}. {userName} - {experience}</h1>
              <button onClick={playersState.isPvP}>Challenge</button>
            </div>
          ))}
          </div>
        </div> */}
        {page(playersState)}
      </>
    )
}

export default Home