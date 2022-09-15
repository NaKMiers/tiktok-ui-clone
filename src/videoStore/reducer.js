import { ADD_VIDEO, DELETE_VIDEO } from './constants'

const initState = {
   videos: [],
}

function reducer(state = initState, action) {
   switch (action.type) {
      case ADD_VIDEO:
         console.log(action.payload)
         return {
            ...state,
            videos: [...state.videos, action.payload],
         }

      case DELETE_VIDEO:
         return {
            ...state,
            videos: state.videos.filter(
               (v, i) => i !== action.index
            ),
         }

      default:
         throw new Error('Invalid Action')
   }
}

export { initState }
export default reducer
