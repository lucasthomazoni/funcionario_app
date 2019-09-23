import http from './http'

const find = id => http.get(`funcionarios/${id}`)

const create = obj => http.post('funcionarios', obj)

const update = obj => http.put('funcionarios', obj)

const remove = id=> http.delete(`funcionarios/${id}`)

const getList = () => http.get('funcionarios')

export default {
  find,
  create,
  update,
  remove,
  getList
}