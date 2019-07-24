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
    updatetie: (id, body) => axios.put(`/players/${id}/tie`, body)
}

export default Player