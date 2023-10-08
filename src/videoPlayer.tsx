import { useEffect, useRef, useState } from 'react';

import video1 from './assets/video-1.mp4';
import video2 from './assets/video-2.mp4';

function VideoPlayer({ onLoad }: any) {
    const [showFirstVideo, setShowFirstVideo] = useState(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        onLoad(videoRef);
    }, [])

    const toggleVideos = () => {
        console.log('ended video');
        setShowFirstVideo(!showFirstVideo);
    };

    return (
        <div className="flex items-center overflow-hidden">
            <video
                ref={videoRef}
                className={`transition-opacity duration-1000 ${showFirstVideo ? 'opacity-100' : 'opacity-0'}`}
                autoPlay
                onEnded={toggleVideos}
                src={video1}
            />

            <video
                className={`transition-all duration-1000 ${!showFirstVideo ? 'opacity-100 -translate-x-full' : 'opacity-0'}`}
                autoPlay
                onEnded={toggleVideos}
                src={video2}
            />
        </div>
    );
}
export default VideoPlayer;