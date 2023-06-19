import request from '../utils/request.js'

export const getCodeImg = params =>
  request.get('/auth/platform/code', params, false)

export const login = data => request.post('/auth/platform/login', data)

export const getInfo = params => request.get('/auth/platform/info', params)
