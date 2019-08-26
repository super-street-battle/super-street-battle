import axios from 'axios'

const Challenges = {
    getall: id => axios.get(`/challenges/${id}`),
    getone: id => axios.get(`/challenges/view/${id}`),
    postone: body => axios.post('/challenges', body),
    deleteone: id => axios.delete(`/challenges/${id}`)
}

export default Challenges