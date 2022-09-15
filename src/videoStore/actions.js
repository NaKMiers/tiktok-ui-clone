import { ADD_VIDEO, DELETE_VIDEO } from './constants'

export const addVideo = payload => ({
   type: ADD_VIDEO,
   payload,
})

export const deleteVideo = index => ({
   type: DELETE_VIDEO,
   index,
})
