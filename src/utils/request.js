import axios from 'axios'

const request = axios.create({
   baseURL: 'https://632bd65c1aabd837398cacd0.mockapi.io/api/',
   // baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

export const get = async (path, option = {}) => {
   const res = await request.get(path, option)
   return res.data
}

export default request
