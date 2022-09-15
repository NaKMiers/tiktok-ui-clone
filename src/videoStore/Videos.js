import { useRef } from 'react'
import { useState } from 'react'
import { addVideo } from './actions'
import { useStore } from './hooks'
import Video from './Video'

function Videos() {
   const [video, setVideo] = useState()
   const [state, dispatch] = useStore()
   const videoRef = useRef()

   console.log(state)

   const { videos } = state

   const handleSetVideo = e => {
      setVideo(URL.createObjectURL(e.target.files[0]))
   }

   const handleAddVideo = () => {
      dispatch(addVideo(video))
      videoRef.current.value = null
      setVideo()
   }

   return (
      <div className='Videos' style={{ padding: 16 }}>
         <button onClick={handleAddVideo}>Add</button>
         <input
            ref={videoRef}
            onChange={handleSetVideo}
            type='file'
            placeholder='Title'
         />

         <div>
            {videos.map((v, i) => (
               <Video key={i} src={v} index={i} />
            ))}
         </div>
      </div>
   )
}

export default Videos
