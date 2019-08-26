import axios from 'axios'

const Player =  {
    get10: _ => axios.get('/players'),
    getone: id => axios.get(`/players/${id}`),
    putone: (id, item, body) => axios.put(`/players/${id}/${item}`, body),
    updatebank: (id, body) => axios.put(`/players/${id}/bankAccount`, body),
    checkuid: body => axios.post('/players/login', body),
    updateexperience: (id, body) => axios.put(`/players/${id}/experience`, body),
    updatewin: (id, body) => axios.put(`/players/${id}/win`, body),
    updateloss: (id, body) => axios.put(`/players/${id}/loss`, body),
    updatetie: (id, body) => axios.put(`/players/${id}/tie`, body),
    removecar: (id, carid) => axios.delete(`/players/${id}/delete-car/${carid}`),
    getrange: (id, max, min) => axios.get(`/players/challenge/${id}/${max}/${min}`)
}

export default Player