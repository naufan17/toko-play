import { React, useState, useEffect } from 'react';
import axios from 'axios';

export default function Video({id}) {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getOneVideo();

    }, []);
    
    const getOneVideo = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/videos/${id}`);
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto lg:max-w-2xl">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                        <iframe className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96" src={videos.url_video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}