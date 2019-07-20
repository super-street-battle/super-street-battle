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
      console.log(data)
      setplayersState({ ...playersState, topplayers: data })
    })
    .catch(e => console.error(e))
    // Player.getone()
  }, [])

    return (
      <>
        <Nav2 />
        <div className="homepage">
          <h1 className="subtitle">Top Players</h1>
          {/* <p>Your Experience: {}</p> */}
          {playersState.topplayers.map(({name, experience}, index) => (
            // <div>
              <h1 className="topplayer">{index+1}. {name} - {experience}</h1>
            // </div>
          ))}
          <div className="decoration"></div>
        </div>
      </>
    )
}

export default Home