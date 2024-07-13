import React from 'react'
// import video2 from '../assets/video/iitvideo.mp4'
const VideoComponent = () => {
  return (
    <div className='video-component'>
      <video muted autoPlay loop poster="/sites/default/files/poster.webp" playsInline preload="none" className="relative w-full h-full" >
        <source src="https://res.cloudinary.com/denmnkoks/video/upload/v1720769868/iitvideo_h2xrgh.mp4" type="video/mp4" />
      </video>
    </div>
  )
}


export default VideoComponent