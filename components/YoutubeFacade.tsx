'use client'

import { useState } from 'react';

const YoutubeFacade = ({ videoId, title }) => {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="relative">
            {!showVideo && (
                <div
                    className="relative cursor-pointer"
                    onClick={handleClick}
                >
                    {/* Display the video thumbnail here */}
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={title}
                        className="w-full"
                    />
                    {/* YouTube logo overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img
                            src="/static/images/youtube-logo.png" // Replace with the path to your YouTube logo image
                            alt="YouTube Logo"
                            className="w-24 h-16"
                        />
                    </div>
                </div>
            )}

            {/* If showVideo is true, display the YouTube iframe */}
            {showVideo && (
                <div className="aspect-ratio-16/9">
                    <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                        title={title}
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default YoutubeFacade;
