import axios from 'axios'

const Car = {
    getall: id => axios.get(`/players/${id}`),
    updatebody: (id, body) => axios.put(`/cars/${id}/bodyKit`, body),
    updateimage: (id, body) => axios.put(`/cars/${id}/imageLink`, body),
    updatetires: (id, body) => axios.put(`/cars/${id}/tire`, body),
    updateengine: (id, body) => axios.put(`/cars/${id}/engine`, body),
    updatevalue: (id, body) => axios.put(`/cars/${id}/value`, body),
    updateanimation: (id, body) => axios.put(`/cars/${id}/animation`, body),
    updateuid: (id, body) => axios.put(`/cars/${id}/uid`, body),
    updateselling: (id, body) => axios.put(`/cars/${id}/selling`, body),
    buyused: (id, body) => axios.put(`/cars/${id}/add-car`, body),
    postone: (body, id) => axios.post('/cars', body, id)
}

export default Car