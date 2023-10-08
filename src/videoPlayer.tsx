import { useEffect, useRef, useState } from 'react';

import video1 from './assets/video-1.mp4';
import video2 from './assets/video-2.mp4';

function VideoPlayer({ onLoad }: any) {
    const [showFirstVideo, setShowFirstVideo] = useState(true);
    const videoRef1 = useRef<HTMLVideoElement | null>(null);
    const videoRef2 = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (showFirstVideo) {
            onLoad(videoRef1)
        } else {
            onLoad(videoRef2)
        }
        // onLoad(videoRef1);
    }, [showFirstVideo])

    const toggleVideos = () => {
        console.log('ended video');
        setShowFirstVideo(!showFirstVideo);
    };

    return (
        <div className="flex items-center overflow-hidden">
            <video
                ref={videoRef1}
                className={`transition-opacity duration-1000 ${showFirstVideo ? 'opacity-100' : 'opacity-0'}`}
                onEnded={toggleVideos}
                src={video1}
            />

            <video
                ref={videoRef2}
                className={`transition-all duration-1000 ${!showFirstVideo ? 'opacity-100 -translate-x-full' : 'opacity-0'}`}
                onEnded={toggleVideos}
                src={video2}
            />
        </div>
    );
}
export default VideoPlayer;