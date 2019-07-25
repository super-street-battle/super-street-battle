import React, {useEffect, useState} from 'react'
import './home.css'
import Nav2 from '../../components/nav2'
import Player from '../../utils/player'

const Home = _ => {
  const [ playersState, setplayersState ] = useState({
    topplayers: []
  })

  useEffect( _ => {
    Player.get10()
    .then(({data}) => {
      setplayersState({ ...playersState, topplayers: data })
    })
    .catch(e => console.error(e))
  }, [])

    return (
      <>
        <Nav2 />
        <div className="homepage">
          <h1 className="subtitle">Top Players</h1>
          {/* <p>Your Experience: {}</p> */}
          <div className="topcontainer">
          {playersState.topplayers.map(({userName, experience}, index) => (
              <h1 className="topplayer">{index+1}. {userName} - {experience}</h1>
          ))}
          </div>
        </div>
      </>
    )
}

export default Home