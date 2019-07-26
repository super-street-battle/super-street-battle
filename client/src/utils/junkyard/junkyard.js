import axios from 'axios'

const Selling = {
    getall: _ => axios.get('/selling'),
}

export default Selling