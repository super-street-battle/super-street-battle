import axios from 'axios'

const Car = {
    getall: id => axios.get(`/players/${id}`)
}

export default Car