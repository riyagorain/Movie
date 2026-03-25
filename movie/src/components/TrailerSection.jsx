// import React, { useState } from 'react'
// import { dummyTrailers } from '../assets/assets'
// import ReactPlayer from 'react-player'
// import BlurCircle from './BlurCircle'



// // const TrailerSection = () => {
// //     const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])
// //   return (
// //     <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
// //         <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

// //         <div className='relative mt-6  '>
// //             <BlurCircle top='-100px' right='-100px' />
// //             <ReactPlayer url={currentTrailer.videoUrl}  controls={false} className= "max-auto max-w-full" width="960px" height="540px" />
// //         </div>
      
// //     </div>
// //   )
// // }
// // const TrailerSection = () => {
// //   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

// //   return (
// //     <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
// //       <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
// //         Trailers
// //       </p>

// //       <div className='relative mt-6 w-full max-w-[960px] mx-auto aspect-video'>
// //         <BlurCircle top='-100px' right='-100px' />

// //         <ReactPlayer
// //           url={currentTrailer.videoUrl}
// //           controls={true}
// //           width="100%"
// //           height="100%"
// //           className="relative z-10"
// //         />
// //       </div>

// //       {/* <div className='relative mt-6'>
// //   <BlurCircle top='-100px' right='-100px' />

// //   <ReactPlayer 
// //     url={currentTrailer.videoUrl}  
// //     controls={false} 
// //     className="max-auto max-w-full" 
// //     width="960px" 
// //     height="540px" 
// //   />
// // </div> */}

// //     </div>
// //   )
// // }



// const TrailerSection = () => {
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers?.[0])

//   if (!currentTrailer) return null

//   return (
//     <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
      
//       <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
//         Trailers
//       </p>

//       <div className='relative mt-6 w-full max-w-[960px] mx-auto aspect-video'>
//         <BlurCircle top='-100px' right='-100px' />

//         <ReactPlayer
//           url={currentTrailer.videoUrl}
//           controls
//           width="100%"
//           height="100%"
//           className="relative z-10"
//         />
//       </div>

//     </div>
//   )
// }

// export default TrailerSection




// import React, { useState } from 'react'
// import { dummyTrailers } from '../assets/assets'
// import ReactPlayer from 'react-player'
// import BlurCircle from './BlurCircle'

// const TrailerSection = () => {

//   // Safe state initialization
//   const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers?.[0])

//   // Debugging - check trailer data
//   console.log("Current Trailer:", currentTrailer)

//   // Prevent crash if no trailer exists
//   if (!currentTrailer) {
//     return <p className="text-center text-gray-400">No Trailer Available</p>
//   }

//   return (
//     <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>

//       {/* Section Title */}
//       <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
//         Trailers
//       </p>

//       {/* Video Container */}
//       <div className='relative mt-6 w-full max-w-[960px] mx-auto aspect-video'>

//         <BlurCircle top='-100px' right='-100px' />

//         <ReactPlayer
//           url={currentTrailer?.videoUrl}
//           controls={true}
//           width="100%"
//           height="100%"
//           className="relative z-10"
//         />

//       </div>

//     </div>
//   )
// }

// export default TrailerSection


import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailerSection = () => {

  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers?.[0])

  if (!currentTrailer) {
    return <p className="text-center text-gray-400">No Trailer Available</p>
  }

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>

      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
        Trailers
      </p>

      {/* FIXED PLAYER CONTAINER */}
      <div className='relative mt-6 w-full max-w-[960px] mx-auto aspect-video'>

        <BlurCircle top='-100px' right='-100px' />

        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0
          }}
        />

      </div>
      <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
        {/* {dummyTrailers.map(()=>( */}
        {dummyTrailers.map((trailer) => (

          <div key={trailer.image} className='relative group-hover:not-hover:opacity-50 hover:translate-y-1 duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer'onClick={()=>setCurrentTrailer(trailer)} >
            <img src={trailer.image} alt="trailer" className='rounded-lg w-full h-full object-cover brightness-75' />
            <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
        ))}

      </div>

    </div>
  )
}

export default TrailerSection


