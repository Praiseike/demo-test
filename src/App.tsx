import './App.css'
import { useState } from 'react';
import VideoPlayer from './videoPlayer';


function App() {
  const [start, setStart] = useState(false);
  const loader = (ref: any) => {
    ref?.current.play();
  }
  // <div className="flex items-center">
  //   {videos.map((step, index) => (
  //     <Step video={step} key={index} />
  //   ))}
  // </div>
  return (
    <>
      <div className="w-[60%] text-white mt-16 p-10 mx-auto h-[500px] rounded-[20px] bg-blue-800">
        <button onClick={() => setStart(!start)} className="px-4 py-1 text-gray-600 bg-white rounded-[4px] mx-auto mb-5 ">Start</button>
        <div className='border-2 mx-auto border-orange-400 w-[600px] absolute'>
          {start && <VideoPlayer onLoad={loader} />}
        </div>
      </div>
    </>
  )
}

export default App
