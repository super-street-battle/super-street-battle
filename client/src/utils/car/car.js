import axios from 'axios'

const Car = {
    getall: id => axios.get(`/players/${id}`),
    updatebody: (id, body) => axios.put(`/cars/${id}/bodyKit`, body),
    updateimage: (id, body) => axios.put(`/cars/${id}/imageLink`, body)
}

export default Car