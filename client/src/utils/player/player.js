import axios from 'axios'

const Player =  {
    get10: _ => axios.get('/players'),
    getone: id => axios.get(`/players/${id}`)
}

export default Player