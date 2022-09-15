import { useEffect } from 'react'
import { deleteVideo } from './actions'
import { useStore } from './hooks'

function Video({ src, index }) {
   const [, dispatch] = useStore()

   const handleDeleteVideo = () => {
      dispatch(deleteVideo(index))
   }

   useEffect(() => {
      return () => {
         URL.revokeObjectURL(src)
      }
   }, [src])

   return (
      <div
         style={{
            display: 'inline-block',
            position: 'relative',
         }}
      >
         <video src={src} width='150' controls />
         <button
            onClick={handleDeleteVideo}
            style={{ position: 'absolute', right: 0 }}
         >
            Delete
         </button>
      </div>
   )
}

export default Video
