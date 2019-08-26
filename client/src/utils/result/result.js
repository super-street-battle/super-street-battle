import React from 'react'
import axios from 'axios'

const Results = {
    getall: id => axios.get(`/result/${id}`),
    getone: id => axios.get(`/result/view/${id}`),
    postone: body => axios.post('/result', body),
    deleteone: id => axios.delete(`/result/${id}`)
}

export default Results